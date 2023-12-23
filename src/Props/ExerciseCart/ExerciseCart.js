import React, { Component } from 'react'
import CartModal from './CartModal';
import ProductListEXC from './ProductListEXC';

export default class ExerciseCart extends Component {
    
    
      state = {
        SanPhanChiTiet: {
          maSP: 1,
          tenSP: "VinSmart Live",
          manHinh: "AMOLED, 6.2, Full HD+",
          heDieuHanh: "Android 9.0 (Pie)",
          cameraTruoc: "20 MP",
          cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 5700000,
          hinhAnh: "./imgPhone/vsphone.jpg",
          soLuong: 1,
        },
        gioHang: []
      }
    
      changePhone = (newPhone) => {
        this.setState({
          SanPhanChiTiet: newPhone
        })
      }

      themGioHang = (sanPham) => {
        let spGioHang = {
            maSP: sanPham.maSP,
            tenSP: sanPham.tenSP,
            giaBan: sanPham.giaBan,
            soLuong: 1,
            hinhAnh: sanPham.hinhAnh
        }
        //tim trong san pham da co trong gio hang chua
        let index = this.state.gioHang.findIndex(spGH => spGH.maSP === spGioHang.maSP);

        if(index != -1){
            // tim thay sp trong gio hang
            this.state.gioHang[index].soLuong += 1;
        }else{
            //khong tim thay
            this.state.gioHang.push(spGioHang);
        }

        //push vao state.giohang
        // this.state.gioHang.push(spGioHang);
        // let gioHangCapNhat = [...this.state.gioHang, spGioHang];

        this.setState({
            gioHang: this.state.gioHang
        })
      }


    render() {
        return (
            <div className='container-fluid'>
                <h3 className='display-4 text-center'>BÀI TẬP GIỎ HÀNG</h3>
                <div className='text-right'  data-toggle="modal" data-target="#modelId">
                    <span style={{width: 17, cursor: 'pointer'}}>
                    <i class="fa fa-cart-arrow-down"></i>(0)Giỏ hàng
                    </span>
                </div>
                <div className='container'>
                <CartModal gioHang={this.state.gioHang} />
                <ProductListEXC SanPhanChiTiet= {this.state.SanPhanChiTiet} changePhone={this.changePhone} themGioHang={this.themGioHang}/>
                </div>
            </div>
        )
    }
}
