export const depositMoney = (amount) => {
    return (dispatch) => {
      dispatch({
        type: 'deposit',
        payload: amount,
      });
    };
  };
  
  export const withdrawMoney = (amount) => {
    return (dispatch) => {
      dispatch({
        type: 'withdraw',
        payload: amount,
      });
    };
  };

  // export const addProduct = (amount) => {
  //   return (dispatch) => {
  //     dispatch({
  //       type: 'withdraw',
  //       payload: amount,
  //     });
  //   };
  // };
  // export const removeProduct = (amount) => {
  //   return (dispatch) => {
  //     dispatch({
  //       type: 'withdraw',
  //       payload: amount,
  //     });
  //   };
  // };
  