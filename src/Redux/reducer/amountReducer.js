const reducer = (state = 0, action) => {
  if (action.type === "deposit") {
    return state + action.payload;
  } else if (action.type === "withdraw") {
    // Prevent negative state
    const newState = state - action.payload;
    return newState >= 0 ? newState : state;
  } else {
    return state;
  }
};

export default reducer;
