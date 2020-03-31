import * as actionTypes from '../actions/actions';

const initialState = {
  data: {
    loading: null,
    access_token: null,
  },
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.IS_LOADING:
      return {
        ...state,
        data: action.payload,
      };
  }
  return state;
}
