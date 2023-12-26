import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProductItemRedux extends Component {
  render() {
    let {product} = this.props;
    return (
        <div className="card text-left w3-container w3-animate-zoom" style={{width: '350px'}}>
        <img  className="card-img-top" src={product.hinhAnh} alt={product.hinhAnh}></img>
        <div className="card-body">
          <h4 className="card-title">{product.tenSP}</h4>
          <p className="card-text">{product.giaBan.toLocaleString()}</p>
          <button className='btn btn-dark text-white w3-button w3-green' onClick={() => {}}>Xem chi tiết</button>
            <button className='btn btn-dark text-white w3-button w3-red ml-2' onClick={()=>{this.props.themGioHang(product)}}>Thêm giỏ hàng <i class="fa fa-shopping-cart"></i></button>
        </div>
      </div>
    )
  }
}
// ham gui du lieu len store
const mapDispatchToProps = (dispatch) =>{
  return{
    themGioHang: (sanPham)=>{
      // tao ra san pham gio hang
      let spGioHang ={
        maSP: sanPham.maSP, 
        tenSP: sanPham.tenSP, 
        hinhAnh: sanPham.hinhAnh, 
        soLuong:1, 
        giaBan: sanPham.giaBan};
      //tao ra action
      let action = {
        type: 'THEM_GIO_HANG', //thuoc tinh bat buoc cua action
        spGioHang
      };

      //dung ham dispatch tu redux => gui du lieu len reducer
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(ProductItemRedux)
