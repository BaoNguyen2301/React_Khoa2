import React, { Component } from 'react'

export default class ProductsItem extends Component {
    render() {
        let {item} = this.props;
        return (
            <div className="card text-left">
                <img className="card-img-top" src={item.img} alt />
                <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">{item.price}</p>
                    <button data-toggle="modal" data-target="#modelId" className='btn btn-dark text-white w3-button w3-green' onClick={()=>{this.props.changeCar(item)}}>Xem chi tiết</button>
                </div>
            </div>
        )
    }
}
