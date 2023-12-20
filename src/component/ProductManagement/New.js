import React, { Component } from 'react';

class ProductStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 1,
            inStock: this.props.inStock,
        };
    }

    increment = () => {
        if (this.state.amount < this.state.inStock) {
            this.setState({ amount: this.state.amount + 1 });
        }
    };

    decrement = () => {
        if (this.state.amount > 1) {
            this.setState({ amount: this.state.amount - 1 });
        }
    };

    render() {
        return (
            <div>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.amount}</span>
                <button onClick={this.increment}>+</button>
            </div>
        );
    }
}

export default ProductStock;