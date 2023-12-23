import React, { Component } from 'react'

export default class CartModal extends Component {

  renderCart = () => {
    let {gioHang} = this.props;
    return gioHang.map((spGioHang, index) => {
      return <tr key={index}>
        <td>
          <img style={{ width: 35, height: 35 }} src={spGioHang.hinhAnh} alt={spGioHang.hinhAnh}></img>
        </td>
        <td>{spGioHang.maSP}</td>
        <td>{spGioHang.tenSP}</td>
        <td>{spGioHang.soLuong}</td>
        <td>{spGioHang.giaBan}</td>
        <td>{spGioHang.giaBan * spGioHang.soLuong}</td>
      </tr>
    })
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
                    </tr>
                  </thead>
                  <tbody>
                      {this.renderCart()}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
