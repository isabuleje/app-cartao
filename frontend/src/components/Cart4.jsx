import React, { useState } from 'react';
import './Cart.css'

//Ta funcionando
const Cart4 = () => {
  const [products, setProducts] = useState([
    { id: 1, product_name: "Fanta", price: 4.5, quantity: 0 },
    { id: 2, product_name: "Sprite", price: 4, quantity: 0 },
    { id: 3, product_name: "Coca cola", price: 3, quantity: 0 }
  ]);

  const incrementQuantity = (id) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decrementQuantity = (id) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  return (
    <div className='products'>
      {products.map(product => (
        <div className='product' key={product.id}>
          <div className='product_details'>
            <h3>{product.product_name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur...</p>
            <h3>R${product.price.toFixed(2)}</h3>
          </div>
          <div className='product_quantity_container'>
            <button onClick={() => incrementQuantity(product.id)}>+</button>
            <p>{product.quantity}</p>
            <button onClick={() => decrementQuantity(product.id)}>-</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart4;
