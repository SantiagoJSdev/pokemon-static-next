import { useEffect, useState } from 'react';
import { Layout } from '../../component/layouts';
import { FavoritePokemons } from '../../component/pokemon/FavoritePokemons';
import { NoFavorites } from '../../component/ui/NoFavorites';
import { localFavorites } from '../../utils';

// import { Layout } from '../../components/layouts';
// import { NoFavorites } from '../../components/ui';
// import { localFavorites } from '../../utils';
// import { FavoritePokemons } from '../components/pokemon';

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons( localFavorites.pokemons() );
  }, []);
  


  return (
      <Layout title='Pokémons - Favoritos'>
        
        {
          favoritePokemons.length === 0 
            ? ( <NoFavorites /> )
            : ( <FavoritePokemons pokemons={favoritePokemons} /> )
              }
      
      </Layout>
  )
};

export default FavoritesPage;
