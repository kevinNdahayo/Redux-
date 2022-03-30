const redux = require('redux')
const createStore = redux.createStore

const BUY_CLOTHES = 'BUY_CLOTHES'

function buyClothes() {
  return {
    type: BUY_CLOTHES,
  }
}
const initialState = {
  numOfClothes: 100,
}
const reducer = (state = initialState, action) => {
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

const store = createStore(reducer)
console.log('InitialState', store.getState())
const unsubscribe = store.subscribe(() => {
  console.log('Updated State', store.getState())
})
store.dispatch(buyClothes())
store.dispatch(buyClothes())
store.dispatch(buyClothes())
unsubscribe()
