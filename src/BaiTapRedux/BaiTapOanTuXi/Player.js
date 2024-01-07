import React, { Component } from 'react'
import { connect } from 'react-redux'
class Player extends Component {
    render() {
        return (
            <div className='playerGame mt-5'>
                <div className='theThink'>
                    <img style={{ width: 75, height: 75, marginTop:35, transform: 'rotate(120deg)'}} src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} alt={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}></img>
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 200, height: 200 }} src='./imgKeoBuaBao/player.png' alt='./imgKeoBuaBao/player.png'></img>
                <div className='row'>
                    {this.props.mangDatCuoc.map((item, index)=>{
                        //Xet gia tri dat cuoc them vien cho item dc chon

                        let border = {};
                        if(item.datCuoc){
                            border = { border: '5px solid orange'};
                        }

                        return <div className='col-4' key={index}>
                        <button onClick={()=>{this.props.datCuoc(item.ma)}} style={border} className='btnItem'>
                            <img width={50} height= {50} src={item.hinhAnh} alt={item.hinhAnh}></img>
                        </button>
                    </div>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        mangDatCuoc: state.BaiTapGameOanTuXiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        datCuoc: (maCuoc)=>{
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Player)
