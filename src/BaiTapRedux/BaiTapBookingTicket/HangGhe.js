import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { datGheAction } from '../../redux/action/BaiTapDatVeAction';
class HangGhe extends Component {

  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = '';
      let disabled = false;
      //trang thai ghe da dat
      if (ghe.daDat) {
        cssGheDaDat = 'gheDuocChon';
        disabled = true;
      }

      //trang thai ghe dang dat
      let cssGheDangDat ='';
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe)
      if(indexGheDangDat !== -1){
        cssGheDangDat = 'gheDangChon';
      }

      return <button onClick={()=> {this.props.datGhe(ghe)}} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index} style={{ fontSize: '12px' }}>
        {ghe.soGhe}
      </button>
    })
  }

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return this.props.hangGhe.danhSachGhe.map((cot, index)=>{
        return <button style={{marginLeft: '22px'}} key={index} className='rowNumber'>{cot.soGhe}</button>
      })
    } else {
      return <Fragment>
        {this.props.hangGhe.hang} {this.renderGhe()}
      </Fragment>
    }
  }


  render() {
    return (
      <div className='text-light text-left mt-4' style={{ fontSize: 25, marginLeft: '8.5rem' }}>
        {this.renderHangGhe()}
      </div>
    )
  }
}


const mapStateToProp = (state) => {
  return{
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe))
    } 
  }
}


export default connect (mapStateToProp, mapDispatchToProps) (HangGhe)
