import * as actionTypes from '../actions/actions';

const initialState = {
  data: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_DATA:
      return {
        ...state,
        data: action.payload,
      };
  }
  return state;
}
