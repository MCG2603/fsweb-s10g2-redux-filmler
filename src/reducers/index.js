import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import reducerFavorites from './filmFavorite';

 const reducer=combineReducers({
    movieReducer:movieReducer,
    reducerFavorites:reducerFavorites
});
export default  reducer