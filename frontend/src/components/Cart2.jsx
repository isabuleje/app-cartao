import React, { Component } from 'react'
import './Cart2.css'

//Esse aqui tbm tá funcionando
export default class Cart2 extends Component {
    constructor(){
        super()
        this.state = {
            products: [
                {id:1, product_name:"Fanta", price: 4.5},
                {id:2, product_name:"Sprite", price: 4},
                {id:3, product_name:"Coca cola", price: 3}
            ]
        }
    }


  render() {
    return (
      <div className='produts'>
        <div className='product'>
            <div className='product_details'>
                <h3> product</h3>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim nemo culpa quos magni nostrum. Sapiente qui, aspernatur fugiat a eos unde quidem maiores nihil natus commodi minus recusandae neque maxime.</p>
                    <h3>%25</h3>
            </div>
            <div className='product_quantity_container'>
                <button>+</button>
                <p>2</p>
                <button>-</button>
            </div>
        </div>
    </div>
    )
  }
}
