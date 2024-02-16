import { ADD_TO_FAVORITE, REMOVE_TO_FAVORITE } from "../actions/index";

const initialState = {
  content: [],
};

const manReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_TO_FAVORITE:
      return {
        ...state,
        content: state.content.filter((song) => song._id !== action.payload),
      };
    default:
      return state;
  }
};

export default manReducer;
