import React from 'react';

const AddToCart = ({ id, productName, productPrice, stockQuantity, addToCart }) => {
 const handleAddToCart = () => {
    addToCart({ id, productName, productPrice, stockQuantity });
 };

 return (
    <div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
 );
};

export default AddToCart;