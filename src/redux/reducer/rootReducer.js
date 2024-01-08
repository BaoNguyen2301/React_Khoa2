import {combineReducers} from 'redux'
import BaiTapGioHangReducer from './BaiTapGioHangReducer';
import BaiTapGameXucXacReducer from './BaiTapXucXacReducer';
import BaiTapGameOanTuXiReducer from './BaiTapOanTuXiReducer';
import BaiTapDatVeReducer from './BaiTapDatVeReducer';
const rootReducer = combineReducers({// store tong
    stateGioHang: BaiTapGioHangReducer, //state gio hang
    BaiTapGameXucXacReducer,
    BaiTapGameOanTuXiReducer,
    BaiTapDatVeReducer
})

export default rootReducer;