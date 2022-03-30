const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const createStore = redux.createStore

const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

// Action creators
const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  }
}

const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  }
}

const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  }
}

const initialState = {
  loading: false,
  users: [],
  error: '',
}

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
      break
    case FETCH_POSTS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: '',
      }
      break
    case FETCH_POSTS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      }
      break

    default:
      break
  }
}

const fetchPosts = () => {
  return function (dispatch) {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // response.data is returned
        const posts = response.data
        dispatch(fetchPostsSuccess(posts))
      })
      .catch((err) => {
        const errorMessage = err.message
        dispatch(fetchPostsFailure(errorMessage))
      })
  }
}

const store = createStore(reducer, redux.applyMiddleware(thunkMiddleware))
store.dispatch(fetchPosts())
store.subscribe(() => {
  console.log(store.getState())
})
