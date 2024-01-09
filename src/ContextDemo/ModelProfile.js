import React, { Component } from 'react'
import { ModelContext } from './_Context/ModelContext'

export default class ModelProfile extends Component {
    render() {
        return (
            <ModelContext.Consumer>
                {(value) => {
                    return <div>
                        <div className="card text-left bg-dark text-white" style={{ width: 200 }}>
                            <img style={{ width: 200, height: 250 }} className="card-img-top" src="https://th.bing.com/th/id/OIP.rFEILX7e6ZA01pYh9gTLEQAAAA?rs=1&pid=ImgDetMain" alt="https://th.bing.com/th/id/OIP.rFEILX7e6ZA01pYh9gTLEQAAAA?rs=1&pid=ImgDetMain" />
                            <div className="card-body">
                                <h4 className="card-title">Nhân vật: Vương Lâm</h4>
                                <p className="card-text">Cấp Bậc: bước thứ 10</p>
                                <p>Lượt thích <i className="fa fa-thumbs-up"></i> {value.stateLike}</p>
                            </div>
                        </div>
                    </div>
                }}

            </ModelContext.Consumer>
        )
    }
}
