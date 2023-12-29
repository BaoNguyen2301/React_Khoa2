import React, { Component } from 'react';
import './BaiTapGameXucXac.css';
import XucXac from './XucXac';
import ThongTinTroChoi from './ThongTinTroChoi';
import { connect } from 'react-redux';
class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className='game'>
                <div className='title-game text-center mt-5 display-4'>
                    BÀI TẬP GAME XÚC XẮC
                </div>
                <div className='row text-center mt-5'>
                    <div className='col-5 pl-5'>
                        <button onClick={()=>{this.props.datCuoc(true)}} className='btnGame'>TÀI</button>
                    </div>
                    <div className='col-2'>
                        <XucXac />
                    </div>
                    <div className='col-5 pr-5'>
                        <button onClick={()=>{this.props.datCuoc(false)}} className='btnGame'>XỈU</button>
                    </div>
                </div>
                <div className='thongTinTroChoi text-center mt-5 display-4'>
                    <ThongTinTroChoi />
                    <button onClick={()=>{this.props.playGame()}} className='btn btn-success p-3 mt-5'>PLAY GAME</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        datCuoc: (taiXiu)=> {
            let action = {
                type: 'DAT_CUOC',
                taiXiu
            }
            dispatch(action)
        },
        playGame: ()=>{
            dispatch({
                type: 'PLAY_GAME', 
            })             
        }
    }
}

export default connect (null, mapDispatchToProps)(BaiTapGameXucXac)
