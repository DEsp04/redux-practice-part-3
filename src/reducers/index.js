//add some reducers
//combine reducers to make changes at the same time or efficient
import { combineReducers } from 'redux';
import postsReducer from './postsReducer';


//store can take one reducer so that's why we use combineReducers
const rootReducer = combineReducers({
  posts: postsReducer,
})



export default rootReducer;