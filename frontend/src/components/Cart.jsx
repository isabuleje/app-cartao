import React, { Component } from 'react'

//rcc gera uma classe
//rafc gera uma estrutura de inicial de arrow
export default class Cart extends Component {
     constructor(){
        super()
        this.state = {
            first_name : "mbape"
        }
     }
     
     change_name = () =>{
        this.setState({first_name : "Andrews"});
     }
  render() {
    return (
      <>
        <div> Oiiii, {this.state}</div>
        <button onClick={this.change_name}> Change name </button>
      
      </>

    )
  }
}
