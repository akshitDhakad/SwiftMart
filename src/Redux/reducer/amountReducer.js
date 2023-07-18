const reducer = (state = { balance: 0 }, action) => {
  if (action.type === "DEPOSIT_MONEY") {
    return {
      ...state,
      balance: state.balance + action.payload.amount,
    };
  } else if (action.type === "WITHDRAW_MONEY") {
    // Prevent negative balance
    const newBalance = state.balance - action.payload.amount;
    return {
      ...state,
      balance: newBalance >= 0 ? newBalance : state.balance,
    };
  } else {
    return state;
  }
};

export default reducer;

