import { ACTION_TYPES } from "../actions/postData";

const initialState = {
  data: [],
};

export const postData = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        data: [...action.payload],
      };
    case ACTION_TYPES.CREATE:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        list: state.data.map((x) =>
          x._id === action.payload._id ? action.payload : x
        ),
      };

    case ACTION_TYPES.DELETE:
      return {
        ...state,
        data: state.data.filter((x) => x._id !== action.payload),
      };

    default:
      return state;
  }
};
