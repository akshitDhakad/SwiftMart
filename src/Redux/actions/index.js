const withdrawMoney = (name, amount) => {
  return {
    type: 'WITHDRAW_MONEY',
    payload: {
      name: name,
      amount: amount
    }
  }
};

const depositMoney = (name, amount) => {
  return {
    type: 'DEPOSIT_MONEY',
    payload: {
      name: name,
      amount: amount
    }
  }
};

export const actionCreators = {
  // ... other action creators ...
  withdrawMoney,
  depositMoney,
};
 