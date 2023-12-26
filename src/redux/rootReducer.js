import {combineReducers} from 'redux'
import BaiTapGioHangReducer from '../redux/BaiTapGioHangReducer';

const rootReducer = combineReducers({// store tong
    stateGioHang: BaiTapGioHangReducer //state gio hang
})

export default rootReducer;