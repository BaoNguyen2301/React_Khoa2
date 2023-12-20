import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    return (
        <div className="card text-left w3-container w3-animate-zoom" style={{width: '350px'}}>
        <img  className="card-img-top" src={this.props.dataProductItem.image} alt />
        <div className="card-body">
          <h4 className="card-title">{this.props.dataProductItem.name}</h4>
          <p className="card-text">{this.props.dataProductItem.price}</p>
          <button className='btn btn-dark text-white w3-button w3-black'>Add to cart <i class="fa fa-cart-arrow-down"></i></button>
        </div>
      </div>
    )
  }
}
