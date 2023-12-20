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

 render() {
    return (
      <div>
        <h1>Products</h1>
        <div>
          <img src="product1-image-url" alt="Product 1" />
          <h2>Product 1</h2>
          <p>Price: $5.00</p>
          <AddToCart inStock={5} addToCart={this.addToCart} productId="1" productName="Product 1" productImageUrl="product1-image-url" productPrice="$5.00" />
        </div>
        <div>
          <img src="product2-image-url" alt="Product 2" />
          <h2>Product 2</h2>
          <p>Price: $10.00</p>
          <AddToCart inStock={10} addToCart={this.addToCart} productId="2" productName="Product 2" productImageUrl="product2-image-url" productPrice="$10.00" />
        </div>
        <h1>Cart</h1>
        <ul>
          {this.state.cart.map((product, index) => (
            <li key={index}>
              {product.productName} - Amount: {product.amount}
            </li>
          ))}
        </ul>
      </div>
    );
 }
}

export default App;