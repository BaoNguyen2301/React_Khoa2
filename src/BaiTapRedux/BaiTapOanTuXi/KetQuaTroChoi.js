import React, { Component } from 'react'
import { connect } from 'react-redux'
class KetQuaTroChoi extends Component {
  render() {
    return (
      <div>
        <div className='display-4 text-warning'>{this.props.ketQua}</div>
        <div className='display-4 text-warning'>Số bàn thắng: <span className='text-success'>{this.props.soBanThang}</span></div>
        <div className='display-4 text-warning'>Tổng số bàn chơi: <span className='text-success'>{this.props.soBanChoi}</span></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.BaiTapGameOanTuXiReducer.ketQua,
    soBanThang: state.BaiTapGameOanTuXiReducer.soBanThang,
    soBanChoi: state.BaiTapGameOanTuXiReducer.soBanChoi
  }
}

export default connect (mapStateToProps)(KetQuaTroChoi)
