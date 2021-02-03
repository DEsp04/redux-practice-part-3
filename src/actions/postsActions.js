//have action in all caps
//creating redux action types
export const GET_POSTS = 'GET_POSTS';
//getPosts telling redux that we're gooing to fetch posts from an API
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
//getPostsSuccess passing the posts to Redux on a successful API call
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';
//getPostsFailure we're informing redux that an error was encountered
//durring redux on failed API call



//we're going to create action creators, which are functions that return  an action which consists of the type and an optional payload loading data

//return an object
export const getPost = () => ({
  type: GET_POSTS,
})

//More info on payload below
// https://stackoverflow.com/questions/51357412/what-is-a-payload-in-redux-context#:~:text=Payload%20is%20a%20non%2Dofficial,in%20a%20Redux%20action%20object
//Passing data around and saving it at one point
export const getPostSuccess = (Post) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
})

export const getPostFailure = (Post) => ({
  type: GET_POSTS_FAILURE,
  payload: posts,
})


export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
})