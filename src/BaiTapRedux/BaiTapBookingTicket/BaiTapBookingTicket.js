import React, { Component, Fragment } from 'react'
import './BaiTapBookingTicket.css'
import HangGhe from './HangGhe'
import ThongTinDatGhe from './ThongTinDatGhe'
import danhSachGheData from '../../Data/danhSachGhe.json'
export default class BaiTapBookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return <Fragment key={index}>
        <HangGhe hangGhe={hangGhe} soHangGhe={index} />
      </Fragment>
    })
  }




  render() {
    return (
      <div className='bookingMovie' style={{ position: 'fixed', width: '100%', height: '100%', backgroundImage: 'url(./bookingTicket/bgmovie.jpg)', backgroundSize: 'cover' }}>
        <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,.6)' }}>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-8 text-center'>
                <h1 className='text-warning display-4 mt-5' style={{ fontFamily: 'fontGame' }}>ĐẶT VÉ XEM PHIM</h1>
                <div className='text-light' style={{ fontSize: '25px' }}>MÀN HÌNH</div>
                <div className='mt-1' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <div className='screen'></div>
                </div>
                {this.renderHangGhe()}
              </div>
              <div className='col-4'>
                <h1 className='text-light mt-5' style={{ fontFamily: 'fontGame', fontSize: '35px' }}>DANH SÁCH GHẾ BẠN CHỌN</h1>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
