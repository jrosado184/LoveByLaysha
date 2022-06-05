import { GET_DISABLED_DAYS } from "./../actions/disabled-actions";

export const initialState = {
  alldisabledDays: [],
  disabledTimes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DISABLED_DAYS: {
      return {
        alldisabledDays: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
