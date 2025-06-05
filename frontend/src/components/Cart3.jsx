import React, { Component } from 'react'

export default class Cart3 extends Component {
    constructor(){
        super()
        this.state = (
            products = [
                (id =1, product_name = "coca cola", quantity = 2),
                (id = 2, product_name = "coca col", quantity = 3),
                (id = 3, product_name = "coca c", quantity = 4)

            ]
        )
    };

    incrementQuantity = (id) => {
        this.setState(prevState => ((
            products = prevState.products.map(product =>
                product.id === id && product.quantity > 0 ? {product, quantity =
                    product.quantity + 1}: product
                
            )

        ))); 
    }

    decrementQuantity = (id) => {
        this.setState(prevState => ((
            products = prevState.products.map(product =>
                product.id === id && product.quantity > 0 ? {product, quantity =
                    product.quantity - 1}: product
                
            )

        ))); 
    }

  render() {
    return (
      <div className='produts'>
        <div className='product'>
            <div className='product_details'>
                <h3>Product</h3>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim nemo culpa quos magni nostrum. Sapiente qui, aspernatur fugiat a eos unde quidem maiores nihil natus commodi minus recusandae neque maxime.</p>
                    <h3>%25</h3>
            </div>
            <div className='product_quantity_container'>
                <button onClick={() => this.incrementQuantity(product.id)}>+</button>
                <p>{product.quantity}</p>
                <button onClick={() => this.decrementQuantity(product.id)}>-</button>
            </div>
        </div>
    </div>
    )
  }
}
