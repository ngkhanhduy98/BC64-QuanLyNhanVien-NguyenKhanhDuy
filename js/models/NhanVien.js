function NhanVien (){
    this.txtTaiKhoan = '';
    this.txtHoTen = '';
    this.txtEmail = '';
    this.txtPassword = '';
    this.txtNgayLam = '';
    this.txtLuongCoBan = 0;
    this.chucVu = '';
    this.gioLam = 0;
    this.xepLoai = function(){
        var xepLoai = '';
        gioLam = this.gioLam*1
        if(gioLam>=192){
            xepLoai = 'Xuất sắc'
        }else if(gioLam<192 && gioLam>=176){
            xepLoai = 'Giỏi'
        }else if(gioLam<76 && gioLam>=160){
            xepLoai = 'Khá'
        }else{
            xepLoai = "Trung Bình"
        }
        return xepLoai;
    }
    this.tongLuong=function (){
        var tongLuong = 0;
        luongCoBan = this.txtLuongCoBan *1;
        if(chucVu == 'Sep'){
            tongLuong += luongCoBan*3;
        }else if(chucVu = 'TruongPhong'){
            tongLuong += luongCoBan*2;
        }else {
            tongLuong += luongCoBan;
        }
        return tongLuong;
    }
}