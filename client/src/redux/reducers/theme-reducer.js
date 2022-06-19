import { THEME } from '../actions/theme-actions';

const initialState = {
  theme: localStorage.getItem('theme'),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME: {
      return {
        ...state,
        theme: localStorage.getItem('theme'),
      };
    }
    default:
      return state;
  }
};

export default reducer;
