import React from 'react'
import './Style.scss'; 
import Search from './Search'

import { useSelector } from 'react-redux';



function Navbar() {
  const amount = useSelector(state =>state.amount)
  return (
    <div className='navbar'>
        <div className='item1'><img className="logo" src="https://icon2.cleanpng.com/20180615/gh/kisspng-computer-icons-drawing-clip-art-vegetarian-symbol-5b2452d15c7351.5745816615291071533787.jpg" alt="logo"/>SwiftMart</div>
        <div className='item2'>
        <div className='counter'>
          <b>{amount}</b>
            
        </div>
          <div><Search/></div>
          <div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
        </svg></div>
         
        </div>
        
        
    </div>
  )
}

export default Navbar