import React, { Component } from 'react';
import './Cart.css'

const Cart4 = () => {
    const [products, setProducts] = useState([
        {id:1, product_name:"Fanta", price: 4.5},
        {id:2, product_name:"Sprite", price: 4},
        {id:3, product_name:"Coca cola", price: 3}
    ]);

    incrementQuantity = (id) => {
        setProducts(prevState => ((
            products = prevState.products.map(product =>
                product.id === id && product.quantity > 0 ? {product, quantity:
                    product.quantity + 1}: product
                
            )

        ))); 
    }

    decrementQuantity = (id) => {
        setProducts(prevState => ((
            products = prevState.products.map(product =>
                product.id === id && product.quantity > 0 ? {product, quantity:
                    product.quantity - 1}: product
                
            )

        ))); 
    }

    return (
        <div className='products'>
        <div className='products'>
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

export default Cart4;
