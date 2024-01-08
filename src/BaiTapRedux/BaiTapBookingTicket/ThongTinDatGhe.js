import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../../redux/action/BaiTapDatVeAction'
class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className='mt-5'>
          <button className='gheDuocChon'></button> <span className='text-light' style={{ fontSize: '30px' }}>ghế đã đặt</span>
          <br></br>
          <button className='gheDangChon'></button> <span className='text-light' style={{ fontSize: '30px' }}>ghế đang đặt</span>
          <br></br>
          <button className='ghe' style={{ marginLeft: 0 }}></button> <span className='text-light' style={{ fontSize: '30px' }}>ghế chưa đặt</span>
        </div>
        <div>
          <table className="table text-light" border='2'>
            <thead>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody>
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return <tr key={index} className='text-warning'>
                  <td>{gheDangDat.soGhe}</td>
                  <td>{gheDangDat.gia}</td>
                  <td><button onClick={()=>{this.props.dispatch(huyGheAction(gheDangDat.soGhe))}}>X</button></td>
                </tr>
              })}
            </tbody>
            <tfoot>
              <tr className='text-warning'>
                <td></td>
                <td>Tổng tiền</td>
                <td>{this.props.danhSachGheDangDat.reduce((Tongtien, gheDangDat, index)=>{
                  return Tongtien += gheDangDat.gia;
                },0).toLocaleString()}</td>
              </tr>
            </tfoot>
          </table>

        </div>
      </div>
    )
  }
}

const mapStateToProp = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
  }
}

export default connect(mapStateToProp)(ThongTinDatGhe)