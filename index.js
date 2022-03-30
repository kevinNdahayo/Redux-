const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

// actionCreator function
function buyCake() {
  return {
    type: BUY_CAKE,
  }
}

const initialState = {
  numOfCakes: 10,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }
    default:
      return state
      break
  }
}

const store = createStore(reducer)
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => {
  console.log('Updated State', store.getState())
})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()
