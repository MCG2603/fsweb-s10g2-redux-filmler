import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/favoritesActions';
import { useParams } from  'react-router-dom';


const FavoriteMovieList = (props) => {
  const favorites = useSelector(store=>store.reducerFavorites.Favorites);
  const displayFavorites = useSelector(store=>store.reducerFavorites.displayFavorites);
  
    

  
  return (
    <div className="flex-1 sm:max-w-[250px] p-5 pr-5 bg-white shadow rounded-md">
      <h5 className='font-bold'>Favori Filmler</h5>
      <div className="pt-3 text-sm">
        { displayFavorites ?
          favorites.map(movie => (
            <Link key={movie.id} className="py-1 flex gap-2 justify-between" to={`/movies/${movie.id}`}>
              {movie.title}
              <span  className="material-icons hover:text-red-600 text-[18px]">remove_circle</span>
            </Link>
          ))
          : ""
        }
       
        
      </div>
    </div>
  );
}


export default FavoriteMovieList;