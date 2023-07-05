import { ADD_FAVORITE ,TOGGLE_FAVORITES,REMOVE_FAVORITE} from "../actions/favoritesActions";

const films=[];

const initialState={
  Favorites:films,
    displayFavorites:false
}
const reducerFavorites = (state=initialState,action) => {
    switch (action.type) {
      case ADD_FAVORITE:
        if(!state.Favorites.includes(action.payload)){
        return {...state,
          Favorites:[...state.Favorites,action.payload]
        }
        }
        return {...state,
          Favorites:[...state.Favorites]
        }
        case TOGGLE_FAVORITES:
         
        return {...state,displayFavorites:!state.displayFavorites};

        case REMOVE_FAVORITE:
        console.log(action.payload)
        console.log(state.Favorites,state.Favorites.id)
        return {...state,
          Favorites: state.Favorites.filter(item => item.id!=action.payload)
          
        }
        
       
          
          
      default:
        return {...state};
    }
}
  
  export default reducerFavorites;