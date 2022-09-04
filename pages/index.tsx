 import { Card, Grid, Row, Text } from '@nextui-org/react'
import type { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api'
import { Layout } from '../component/layouts'
import { PokemonCard } from '../component/pokemon'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
 
 

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({pokemons}) => {

  


  return (
     <>
     <Layout>
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map((pokemon) =>(
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          ))
        }
      </Grid.Container>

     </Layout>
   
     </>
  )
}


 

export const getStaticProps: GetStaticProps = async (ctx) => {
 
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  

  const pokemons: SmallPokemon[] = data.results.map((ele, ind) =>({
    ...ele,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ind + 1}.svg`, 
    id: ind + 1
   } ))

  // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg"

  return {
    props: {
      pokemons: pokemons
    }
  }
}


export default HomePage
