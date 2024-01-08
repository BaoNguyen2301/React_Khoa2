const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './imgKeoBuaBao/keo.png', datCuoc: false },
        { ma: 'bua', hinhAnh: './imgKeoBuaBao/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './imgKeoBuaBao/bao.png', datCuoc: true }
    ],
    ketQua: "bạn thắng!!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'bao', hinhAnh: './imgKeoBuaBao/bao.png', datCuoc: true }
}

const BaiTapGameOanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO': {
            //reset mang cuoc
            let mangDatCuocUpdate = [...state.mangDatCuoc];
            mangDatCuocUpdate = mangDatCuocUpdate.map((item, index)=> {
                if(item.ma === action.maCuoc){
                    return {...item, datCuoc:true}
                }
                return {...item, datCuoc:false};
            })
            state.mangDatCuoc = mangDatCuocUpdate;
            return {...state};
        }
        case 'RANDOM': {
            let soNgauNhien = Math.floor(Math.random() *3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = quanCuocNgauNhien;
            return {...state}
        }
        case 'END_GAME':{
            state.soBanChoi += 1;
            let player = state.mangDatCuoc.find(item => item.datCuoc);
            let computer = state.computer;
            switch(player.ma){
                case 'keo':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'hòa nhau!!!';
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'bạn thua!!!';
                    }else{
                        state.ketQua = "bạn thắng!!!";
                        state.soBanThang += 1;
                    };
                break;
                case 'bua':
                    if(computer.ma === 'keo'){
                        state.ketQua = "bạn thắng!!!";
                        state.soBanThang += 1;
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'hòa nhau!!!';
                    }else{
                        state.ketQua = 'bạn thua!!!';
                    };
                break;
                case 'bao':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'bạn thua!!!';
                    }else if(computer.ma === 'bua'){
                        state.ketQua = "bạn thắng!!!";
                        state.soBanThang += 1;
                    }else{
                        state.ketQua = 'hòa nhau!!!';
                    };
                break;
                default: state.ketQua = "bạn thắng!!!"
            }
            return {...state}
        }
        default:
            return { ...state }
    }
}

export default BaiTapGameOanTuXiReducer;