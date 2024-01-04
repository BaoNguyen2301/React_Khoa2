import React, { Component } from 'react'

export default class KetQuaTroChoi extends Component {
  render() {
    return (
      <div>
        <div className='display-4 text-warning'>bạn thua!!!</div>
        <div className='display-4 text-warning'>Số bàn thắng: <span className='text-success'>0</span></div>
        <div className='display-4 text-warning'>Tổng số bàn chơi: <span className='text-success'>0</span></div>
      </div>
    )
  }
}
