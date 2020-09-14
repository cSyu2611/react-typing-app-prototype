import { combineReducers } from "redux";

import currentTimeState from "./reducers/currentTimeReducer";
import typoCountState from "./reducers/typoCountReducer";

const appReducer = combineReducers({
  currentTimeState,
  typoCountState
});

const combinedReducer = (state, action) => {
  return action.type === "RESET_STATE"
    ? appReducer(undefined, action)
    : appReducer(state, action);
};

export default combinedReducer;
