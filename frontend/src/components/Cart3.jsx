import React, { Component } from 'react'

//Ta tudo certo
export default class Cart3 extends Component {
    constructor(){
        super()
        this.state = {
            products: [
                {id:1, product_name:"Fanta", price: 4.5},
                {id:2, product_name:"Sprite", price: 4},
                {id:3, product_name:"Coca cola", price: 3}

            ]
        }
    };

    incrementQuantity = (id) => {
        this.setState(prevState => ({
            products: prevState.products.map(product =>
                product.id === id && product.quantity > 0 ? {...product, quantity:
                    product.quantity + 1}: product
                
            )

        })); 
    }

    decrementQuantity = (id) => {
        this.setState(prevState => ({
            products: prevState.products.map(product =>
                product.id === id && product.quantity > 0 ? {...product, quantity:
                    product.quantity - 1}: product
                
            )

        })); 
    }

  render() {
     return (
      <div className='products'>
        {this.state.products.map(product => (
          <div className='product' key={product.id}>
            <div className='product_details'>
              <h3>{product.product_name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur...</p>
              <h3>R${product.price.toFixed(2)}</h3>
            </div>
            <div className='product_quantity_container'>
              <button onClick={() => this.incrementQuantity(product.id)}>+</button>
              <p>{product.quantity}</p>
              <button onClick={() => this.decrementQuantity(product.id)}>-</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
