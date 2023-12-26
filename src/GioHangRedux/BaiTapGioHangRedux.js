import React, { Component } from 'react'
import GioHangRedux from './GioHangRedux'
import ProductListRedux from './ProductListRedux'
import { connect } from 'react-redux'

class BaiTapGioHangRedux extends Component {

    renderSoLuong = () => {
        return this.props.gioHang.reduce((tongSoLuong, spGioHang, index) => {
            return tongSoLuong += spGioHang.soLuong;
        },0)
    }



    render() {
        console.log(this.props.gioHang)
        return (
            <div className='container-fluid text-center'>
                <h3>Danh Sach San Pham</h3>
                <div className='text-right' data-toggle="modal" data-target="#modelId">

                    <span style={{ width: 17, cursor: 'pointer' }}>
                        <i class="fa fa-cart-arrow-down"></i>({this.renderSoLuong()})Giỏ hàng
                    </span>
                </div>

                <div className='container'>

                    <ProductListRedux />

                    <GioHangRedux />
                </div>


            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        gioHang: state.stateGioHang.gioHang
    }
}

export default connect(mapStateToProps)(BaiTapGioHangRedux)
