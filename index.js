const redux = require('redux')
const createStore = redux.createStore
const combinedReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAMS = 'BUY_ICECREAM'

// actionCreator function
function buyCake() {
  return {
    type: BUY_CAKE,
  }
}

function buyIceCream() {
  return {
    type: BUY_ICECREAMS,
  }
}
const cakeInitialState = {
  numOfCakes: 10,
}

const iceCreamInitialState = {
  numOfIceCreams: 20,
}

const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }
      break
    default:
      return state
      break
  }
}

const iceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAMS:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      }
      break
    default:
      return state
      break
  }
}
const rootReducer = combinedReducers({
  cakes: cakeReducer,
  iceCream: iceCreamReducer,
})
const store = createStore(rootReducer)
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => {
  console.log('Updated State', store.getState())
})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
