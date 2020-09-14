import { UPDATE_TYPO_COUNT } from "../actions";

const initialState = {
  typoCount: 0
};

const typoCountState = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TYPO_COUNT:
      let nextState = { ...state };
      nextState.typoCount = action.payload;
      return nextState;
    default:
      return state;
  }
};

export default typoCountState;