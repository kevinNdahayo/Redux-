const BUY_CAKE = 'BUY_CAKE'

// Action creater function
function buyCake() {
  return {
    Type: BUY_CAKE,
    info: 'First Redux Action',
  }
}

// Reducer function
// (prevState, action) => newState

const initialState = {
  numOfCakes: 10,
}

const reducer = (state = initialState, action) => {
  switch (action.Type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }
    default:
      return state
  }
}
