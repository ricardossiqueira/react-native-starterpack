import * as actionTypes from '../actions/actions';

const initialState = {
  data: {
    theme: 'default',
  },
};

export function themeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SWITCH_THEME:
      return {
        ...state,
        data: action.payload,
      };
  }
  return state;
}
