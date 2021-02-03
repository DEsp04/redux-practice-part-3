export const initialState = {
  post: [],
  loading: false,
  hasErrors: false,
}



export default function postsReducer(state = initialState, action) { 
  switch (action.type) {
    default:
      return state;
  }
}


// const [posts, setPosts] = useState()