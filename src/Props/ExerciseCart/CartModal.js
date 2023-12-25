import React, { Component } from 'react'

export default class CartModal extends Component {

  renderCart = () => {
    let { gioHang } = this.props;
    return gioHang.map((spGioHang, index) => {
      return <tr key={index}>
        <td>
          <img style={{ width: 35, height: 35 }} src={spGioHang.hinhAnh} alt={spGioHang.hinhAnh}></img>
        </td>
        <td className='pt-3'>{spGioHang.maSP}</td>
        <td className='pt-3'>{spGioHang.tenSP}</td>
        <td className='pt-3'>
          <button className='btn btn-success px-1' onClick={()=>this.props.tangGiamSoLuong(spGioHang.maSP,1)}>+</button>
          {spGioHang.soLuong.toLocaleString()}
          <button className='btn btn-success px-1' onClick={()=>this.props.tangGiamSoLuong(spGioHang.maSP,-1)}>-</button>
          </td>
        <td className='pt-3'>{spGioHang.giaBan.toLocaleString()}</td>
        <td className='pt-3'>{(spGioHang.giaBan * spGioHang.soLuong).toLocaleString()}</td>
        <td>
          <button className='w3-button w3-red w3-border' onClick={()=>{this.props.xoaGioHang(spGioHang.maSP)}}>Xóa</button>
        </td>
      </tr>
    })
  }


  tinhTongTien = ()=> {
    let { gioHang } = this.props;
    return gioHang.reduce((tongTien, spGioHang, index)=>{
      return tongTien += spGioHang.soLuong * spGioHang.giaBan;
    },0).toLocaleString();
  }
  

  render() {
    return (
      <div>
        {/* Modal */}
        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div className="modal-dialog" role="document" style={{ minWidth: 1000 }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng của bạn</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">

                <table className="table">
                  <thead>
                    <tr >
                      <th></th>
                      <th>Mã SP</th>
                      <th>Tên SP</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiên</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderCart()}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={5}></td>
                      <td>Tổng tiền</td>
                      <td>{this.tinhTongTien()}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
