// export * as actionCreators from "./actions/index"

export const depositMoney = (name, amount) => {
    return {
      type: "DEPOSIT_MONEY",
      payload: {
        name: name,
        amount: amount,
      },
    };
  };
  
  export const withdrawMoney = (name, amount) => {
    return {
      type: "WITHDRAW_MONEY",
      payload: {
        name: name,
        amount: amount,
      },
    };
  };
  