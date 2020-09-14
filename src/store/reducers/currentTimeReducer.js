import { UPDATE_CURRENT_TIME } from "../actions";

const initialState = {
  currentTime: 0
};

const currentTimeState = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_TIME:
      let nextState = { ...state };
      nextState.currentTime = action.payload;
      return nextState;
    default:
      return state;
  }
};

export default currentTimeState;