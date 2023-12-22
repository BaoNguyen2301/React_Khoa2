import React, { Component } from 'react'
import ProductsItem from './ProductsItem'

export default class ProductList extends Component {

    renderProductsItem = () => {
        return this.props.productsData.map((products, index) => {
            return <div className='col-3' key={index}>
                <ProductsItem item={products} changeCar ={this.props.changeCar}/>
            </div>
        })
    }


    render() {
        return (
            <div className='container'>
                <div className='row'>
                    {this.renderProductsItem()}
                </div>
            </div>
        )
    }
}
