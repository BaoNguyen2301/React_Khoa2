import {combineReducers} from 'redux'
import BaiTapGioHangReducer from '../redux/BaiTapGioHangReducer';
import BaiTapGameXucXacReducer from './BaiTapXucXacReducer';
import BaiTapGameOanTuXiReducer from './BaiTapOanTuXiReducer';
const rootReducer = combineReducers({// store tong
    stateGioHang: BaiTapGioHangReducer, //state gio hang
    BaiTapGameXucXacReducer,
    BaiTapGameOanTuXiReducer
})

export default rootReducer;