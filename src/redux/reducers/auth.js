import * as actionTypes from '../actions/actions';

const initialState = {
  data: {
    access_token: null,
    refresh_token: null,
    loading: false,
  },
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.LOG_OUT:
      return {
        ...state,
        data: {
          access_token: null,
          refresh_token: null,
          loading: false,
        },
      };
  }
  return state;
}
