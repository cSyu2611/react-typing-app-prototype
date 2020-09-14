// タイポ回数の更新
export const UPDATE_TYPO_COUNT = "UPDATE_TYPO_COUNT";
export const updateTypoCount = typoCount => {
  return {
    type: UPDATE_TYPO_COUNT,
    payload: typoCount
  };
};

// タイムの更新
export const UPDATE_CURRENT_TIME = "UPDATE_CURRENT_TIME";
export const updateCurrentTime = currentTime => {
  return {
    type: UPDATE_CURRENT_TIME,
    paylaod: currentTime
  };
};

// ストアのリセット用
export const RESET_STATE = "RESET_STATE";
export const resetState = () => {
  return {
    type: RESET_STATE
  };
};
