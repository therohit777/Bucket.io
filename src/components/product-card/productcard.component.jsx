import React from 'react';
import "./product-card.styles.scss";
import Button from '../button/button.component';

const ProductCard = ({products}) => {
  const {name,price,imageUrl}=products;
  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button buttonType='inverted'>Add to Card</Button>
    </div>
  )
}

export default ProductCard