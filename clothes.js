const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CLOTHES = 'BUY_CLOTHES'
const BUY_SUIT = 'BUY_SUIT'

function buyClothes() {
  return {
    type: BUY_CLOTHES,
  }
}

function buySuit() {
  return {
    type: BUY_SUIT,
  }
}

const clothesInitialState = {
  numOfClothes: 100,
}

const suitInitialState = {
  numOfSuit: 50,
}

const clothesReducer = (state = clothesInitialState, action) => {
  switch (action.type) {
    case BUY_CLOTHES:
      return {
        ...state,
        numOfClothes: state.numOfClothes - 1,
      }
      break
    default:
      return state
      break
  }
}

const suitReducer = (state = suitInitialState, action) => {
  switch (action.type) {
    case BUY_SUIT:
      return {
        ...state,
        numOfSuit: state.numOfSuit - 1,
      }
      break

    default:
      return state
      break
  }
}

const rootReducer = combineReducers({
  clothes: clothesReducer,
  suit: suitReducer,
})
const store = createStore(rootReducer)
console.log('InitialState', store.getState())
const unsubscribe = store.subscribe(() => {
  console.log('Updated State', store.getState())
})
store.dispatch(buyClothes())
store.dispatch(buyClothes())
store.dispatch(buyClothes())
store.dispatch(buySuit())
store.dispatch(buySuit())
unsubscribe()
