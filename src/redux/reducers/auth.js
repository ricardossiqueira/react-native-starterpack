import * as actionTypes from '../actions/actions';

const initialState = {
  data: [
    {
      loading: true,
    },
  ],
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
