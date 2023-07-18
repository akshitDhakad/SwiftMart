import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../Redux/index';
function Card(props) {
    const dispatch = useDispatch();
    const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);
  return (
    <div className='card'>
        <div>
            <div><b>{props.name}</b></div>
            <div>₹ {props.price}</div>
            <div><img src={`${props.img}`} alt="product-img"/></div>
        </div>
        <div>
            <div>
                <button onClick={() => withdrawMoney(props.price)}>-</button>
                <button>Add to card</button>
                <button onClick={() => depositMoney(props.price)}>+</button>
            </div>
            
        </div>
    </div>
  )
}

export default Card