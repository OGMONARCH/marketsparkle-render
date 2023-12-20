import React, { Component } from 'react';
import AddToCart from './AddToCart';

class App extends Component {
 constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
 }

 addToCart = (product) => {
    this.setState({ cart: [...this.state.cart, product] });
 };

 getTotalPrice = () => {
    let totalPrice = 0;
    this.state.cart.forEach((item) => {
      totalPrice += parseFloat(item.productPrice.replace('$', '')) * item.amount;
    });
    return totalPrice.toFixed(2);
 };

 render() {
    return (
      <div>
        <h1>Products</h1>
        {/* Product list */}
        <h1>Cart</h1>
        <ul>
          {this.state.cart.map((product, index) => (
            <li key={index}>
              {product.productName} - Amount: {product.amount}
            </li>
          ))}
        </ul>
        <h2>Total Price: ${this.getTotalPrice()}</h2>
      </div>
    );
 }
}

export default App;