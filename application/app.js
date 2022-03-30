const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

// Action creators
function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  }
}

function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  }
}

function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  }
}

const initialState = {
  loading: false,
  users: [],
  error: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      }
      break
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: '',
      }
      break
    case FETCH_USERS_FAILURE:
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

const fetchUsers = () => {
  return function (dispatch) {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        //response.data is the array of the users
        const users = response.data.map((user) => user.id)
        dispatch(fetchUsersSuccess(users))
      })
      .catch((error) => {
        //error.message is the error description
        dispatch(fetchUsersFailure(error.message))
      })
  }
}
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {
  console.log(store.getState())
})
store.dispatch(fetchUsers())