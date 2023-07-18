import React from 'react';
import { useDispatch } from 'react-redux';
import { depositMoney, withdrawMoney } from '../Redux/index'; // Import both action creators

function Card(props) {
  const dispatch = useDispatch();

  const handleDeposit = () => {
    dispatch(depositMoney(props.name, props.price));
  };

  const handleWithdraw = () => {
    dispatch(withdrawMoney(props.name, props.price));
  };

  return (
    <div className='card'>
      <div>
        <div><b>{props.name}</b></div>
        <div>₹ {props.price}</div>
        <div><img src={`${props.img}`} alt="product-img"/></div>
      </div>
      <div>
        <div>
          <button onClick={handleWithdraw}>-</button>
          <button>Add to cart</button>
          <button onClick={handleDeposit}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
