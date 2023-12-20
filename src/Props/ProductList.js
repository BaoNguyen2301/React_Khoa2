import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {
  renderProductItem = () => {
    return this.props.arrProduct.map((item, index) => {
      return <div className='col-4 mt-3' key={index}>
        <ProductItem dataProductItem = {item}/>
      </div>
    })
  }



  render() {
    console.log(this.props.arrProduct);

    return (
      <div className='container'>
        <div className='row'>
          {this.renderProductItem()}
        </div>
      </div>
    )
  }
}
