import React, { Component } from 'react'

export default class ProductItemEXC extends Component {
  render() {
    let{dataSanPham} = this.props;
    return (
      <div>
        <div className="card text-left">
          <img style={{ width: 300, height: 300, margin: 'auto' }} className="card-img-top" src={dataSanPham.hinhAnh} alt={dataSanPham.hinhAnh} />
          <div className="card-body">
            <h4 className="card-title">{dataSanPham.tenSP}</h4>
            <p className="card-text">{dataSanPham.giaBan}</p>
            <button className='btn btn-dark text-white w3-button w3-green' onClick={() => { this.props.changePhone(dataSanPham) }}>Xem chi tiết</button>
            <button className='btn btn-dark text-white w3-button w3-red ml-2' onClick={()=>{this.props.themGioHang(dataSanPham)}}>Thêm giỏ hàng <i class="fa fa-shopping-cart"></i></button>
          </div>
        </div>
      </div>
    )
  }
}
