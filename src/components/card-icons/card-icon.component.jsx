import React from 'react';
import "./card-icon.styles.scss";
import {ReactComponent as ShopIcon} from "../../assets/shopping-bag.svg";

const CardIcon = () => {
  return (
    <div>
        <div className="cart-icon-container">
            <ShopIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    </div>
  )
}

export default CardIcon;