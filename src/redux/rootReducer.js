import {combineReducers} from 'redux'
import BaiTapGioHangReducer from '../redux/BaiTapGioHangReducer';
import BaiTapGameXucXacReducer from './BaiTapXucXacReducer';


const rootReducer = combineReducers({// store tong
    stateGioHang: BaiTapGioHangReducer, //state gio hang
    BaiTapGameXucXacReducer
})

export default rootReducer;