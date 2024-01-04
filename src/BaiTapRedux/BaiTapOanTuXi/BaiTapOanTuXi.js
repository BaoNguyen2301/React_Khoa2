import React, { Component } from 'react'
import './BaiTapOanTuXi.css'
import Player from './Player'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
export default class BaiTapOanTuXi extends Component {
  render() {
    return (
      <div className='gameOTX'>
        <div className='row text-center mt-5'>
          <div className='col-4'>
            <Player/>
          </div>
          <div className='col-4'>
            <KetQuaTroChoi/>
            <button className='btn btn-success p-2 display-3 mt-5'>Play game</button>
          </div>
          <div className='col-4'>
            <Computer/>
          </div>
        </div>
      </div>
    )
  }
}
