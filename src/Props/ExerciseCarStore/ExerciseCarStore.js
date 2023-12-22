import React, { Component } from 'react'
import Modal from './Modal';
import ProductList from './ProductList';

export default class ExerciseCarStore extends Component {
    products = [
        { id: 1, name: 'black car', img: './imgCar/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './imgCar/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './imgCar/silver-car.jpg', price: 3000 },
        { id: 4, name: 'Steel car', img: './imgCar/steel-car.jpg', price: 4000 }
    ];

    state = {
        Car:{
            id: 1, 
            name: 'black car', 
            img: './imgCar/black-car.jpg', 
            price: 1000
        }
    }

    changeCar = (newCar)=>{
        this.setState({
            Car: newCar
        })
    }




    render() {
        return (
            <div>
                <h3 className='display-4 text-center'>Danh sách xe</h3>
                <Modal content = {this.state.Car}/>
                <ProductList productsData={this.products} changeCar={this.changeCar}/>
            </div>
        )
    }
}
