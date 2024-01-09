import React, { Component, PureComponent } from 'react'

export default class Profile extends PureComponent {
    render() {
        console.log("load")
        return (
            <div>
                <div className="card text-left bg-dark text-white" style={{ width: 200}}>
                    <img style={{ width: 200, height: 250 }} className="card-img-top" src="https://th.bing.com/th/id/OIP.rFEILX7e6ZA01pYh9gTLEQAAAA?rs=1&pid=ImgDetMain" alt="https://th.bing.com/th/id/OIP.rFEILX7e6ZA01pYh9gTLEQAAAA?rs=1&pid=ImgDetMain" />
                    <div className="card-body">
                        <h5 >Lượt thích <i className="fa fa-thumbs-up"></i> {this.props.like}</h5>
                        <h4 className="card-title">Nhân vật: Vương Lâm</h4>
                        <p className="card-text">Cấp Bậc: bước thứ 10</p>
                    </div>
                </div>
            </div>
        )
    }
}
