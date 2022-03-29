const BUY_CLOTHES = 'Buy clothes'

// Action creator function
function BuyClothes() {
  return {
    type: BUY_CLOTHES,
    info: 'Shop High quality clothes',
  }
}

// Initial state of the application
const initialState = {
  numOfClothes: 100,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CLOTHES:
      return {
        ...state,
        numOfClothes: numOfClothes - 1,
      }

    default:
      state
  }
}
