import {
  SET_TEST
} from './actions'

export const initialState = {
  test: null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEST: {
      return {
        ...state,
        test: action.payload
      }
    }
  }
}