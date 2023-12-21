import React, { useState } from 'react';
import AddToCart from './component/AddToCart';
import Home from './component/Home';
import Carty from './component/Carty';
import Rogue from './Rogue';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useCallback } from 'react';

const App = () => {
 const [cart, setCart] = useState([]);

 const addToCart = useCallback((product) => {
    setCart((prevState) => {
      const productExists = prevState.find(
        (prevProduct) => prevProduct.id === product.id
      );
      if (productExists) {
        return prevState.map((prevProduct) =>
          prevProduct.id === product.id
            ? { ...prevProduct, amount: prevProduct.amount + 1 }
            : prevProduct
        );
      }
      else {
        return [...prevState, { ...product, amount: 1 }];
      }
    });
 }, []);
 
 


 const updateCartQuantity = useCallback((productId, amount) => {
    setCart((prevState) =>
      prevState.map((product) =>
        product.id === productId ? { ...product, amount } : product
      )
    );
 }, []);

 const removeFromCart = useCallback((productId) => {
 setCart((prevState) => prevState.filter((product) => product.id !== productId));
}, []);

const getTotalPrice = () => {
 let totalPrice = 0;
 cart.forEach((item) => {
    totalPrice += parseFloat(item.productPrice.replace('₦', '')) * item.amount;
 });
 return totalPrice.toFixed(2);
};

const validateStockQuantity = (productId, amount) => {
 const product = cart.find((product) => product.id === productId);
 if (product) {
    if (amount > product.stockQuantity) {
      alert('Product is out of stock!');
      return false;
    }
 }
 return true;
};



return (
 <div>
    {/* <h1>Products</h1>
    <ul>
      {[
        { id: 1, productName: 'Product 1', productPrice: '1000', stockQuantity: 10 },
        { id: 2, productName: 'Product 2', productPrice: '20000', stockQuantity: 5 },
        { id: 3, productName: 'Product 3', productPrice: '3000', stockQuantity: 20 },
      ].map((product) => (
        <li key={product.id}>
          {product.productName} - ₦{product.productPrice} - In Stock: {product.stockQuantity}
          <AddToCart
            id={product.id}
            productName={product.productName}
            productPrice={product.productPrice}
            stockQuantity={product.stockQuantity}
            addToCart={addToCart}
          />
        </li>
      ))}
    </ul>
    <h1>Cart</h1>
    <ul>
      {cart.map((product, index) => (
        <li key={index}>
          {product.productName} - Amount: {product.amount}
          <button onClick={() => updateCartQuantity(product.id, product.amount + 1)}>
            Increase Quantity
          </button>
          <button onClick={() => updateCartQuantity(product.id, product.amount - 1)}>

            Decrease Quantity
          </button>
          <button onClick={() => removeFromCart(product.id)}>
            Remove from Cart
          </button>
        </li>
      ))}
    </ul>
    <h2>Total Price: ₦{getTotalPrice()}</h2>
    <div></div> */}


<BrowserRouter>

<Home />

<Routes>

<Route element = { <Home /> } path='/' />
<Route element = { <Carty /> } path='/carty' />
{/* <Route element = { <Contact /> } path='/contact' />
<Route element={<div><h2>Not Found page!!!</h2></div>} path='*' />
<Route element={ <Propz /> } path ='/propz' />
<Route element={ <Shop /> } path='/shop' /> */}

</Routes>

</BrowserRouter>

</div>
);
};

export default App;