var arrUser = [];

function getInfo(){
    var arrInput = document.querySelectorAll('form input, form select');
    var arrError = document.querySelectorAll('form span.sp-thongbao');
    console.log(arrError);
    console.log(arrInput);
    var nhanVien = new NhanVien();
    var isValid = true;
    for (var i = 0; i < arrInput.length; i++){
        var inputValue = arrInput[i].value;
        var errorId = arrError[i].id;
        var inputId = arrInput[i].id;
        if(inputId == 'txtTaiKhoan'){
            isValid &=
            checkEmptyValue(inputValue,errorId) && checkMinMax(inputValue,errorId,4,6);
            console.log('Có chạy'); 
        }else if(inputId == 'txtHoTen'){
            isValid &=
            checkEmptyValue(inputValue,errorId) && checkUserName(inputValue,errorId);
        }else if(inputId == 'txtEmail'){
            isValid &=
            checkEmptyValue(inputValue,errorId) && checkEmailValue(inputValue,errorId);
        }else if(inputId == 'txtPassword'){
            isValid &=
            checkEmptyValue(inputValue,errorId) && checkMinMax(inputValue,errorId,6,10) && checkPassword(inputValue,errorId);
        }else if( inputId == 'txtLuongCoBan'){
            isValid &=
            checkEmptyValue(inputValue,errorId) && checkNumber(inputValue,errorId,100000,20000000);
        }else if( inputId == 'gioLam'){
            isValid &=
            checkEmptyValue(inputValue,errorId) && checkNumber(inputValue,errorId,80,200);
        }else if(inputId == 'txtNgayLam'){
            isValid &=
            checkEmptyValue(inputValue,errorId) && checkDateFormat(inputValue,errorId);
        }else{
            isValid &=
            checkEmptyValue(inputValue,errorId);    
        }
        nhanVien[inputId] = inputValue;
    }
    if (isValid) {
        return nhanVien;
    }
        
        // for(var i=0;i<arrInput.length;i++){
        //     var id = arrInput[i].id;
        //     nhanVien[id] = arrInput[i].value;
        // }
    // return nhanVien;
}
document.getElementById('btnDong').onclick = function(){
    document.getElementById('inputForm').reset();
}
document.getElementById('btnThemNV').onclick = function(event){
    console.log('HEllo')
    event.preventDefault();
    var nhanVien = getInfo();
    if(nhanVien){
        arrUser.push(nhanVien);
        document.querySelector('form').reset();
        saveDataToLocalStorage('arrUser',arrUser);
        hienThiDuLieu();
    }
    console.log(arrUser);
}

function saveDataToLocalStorage(key,value){
    var stringValue = JSON.stringify(value);
    localStorage.setItem(key, stringValue);
}

function hienThiDuLieu(arr){
    if(arr == undefined){
        arr = arrUser;
    }
    var content = '';
    for(var i =0 ; i<arr.length;i++){
        var nhanVien = arr[i];
        var newNhanVien = new NhanVien();
        nhanVien = Object.assign(newNhanVien,nhanVien);
        console.log(nhanVien);
        content += `
        <tr>
            <td>${nhanVien.txtTaiKhoan}</td>
            <td>${nhanVien.txtHoTen}</td>
            <td>${nhanVien.txtEmail}</td>
            <td>${nhanVien.txtNgayLam}</td>
            <td>${nhanVien.chucVu}</td>
            <td>${nhanVien.tongLuong()}</td>
            <td>${nhanVien.xepLoai()}</td>
            <td>
                <button onclick="getUserInfo('${nhanVien.txtTaiKhoan}')" 
                class="btn btn-warning" data-toggle="modal"
                data-target="#myModal">Chi Tiết</button>
                <button onclick="deleteUser('${nhanVien.txtTaiKhoan}')" 
                class="btn btn-danger mt-3">Xóa</button>
            </td>
        </tr>
        `
    }
    console.log(content);
    document.getElementById('tableDanhSach').innerHTML = content;
}
function getDataFromLocalStorage(key){
    var dataLocal = localStorage.getItem('arrUser');
    if(dataLocal){
        var convertData = JSON.parse(dataLocal);
        arrUser = convertData;
        hienThiDuLieu();
    }else{
        console.log('Hem Co Gi De Lay Het')
    }
}
getDataFromLocalStorage();

function getUserInfo(userID){
    console.log(userID);
    var userIndex = {};
    for(var i = 0; i<arrUser.length;i++){
        if(arrUser[i].txtTaiKhoan == userID){
            userIndex = arrUser[i];
            console.log(userIndex);
        }
    }

    var arrInput = document.querySelectorAll('form input, form select'); // mảng (array)
    console.log(arrInput);
    for (var z = 0; z < arrInput.length; z++) {
      var htmlDom = arrInput[z];
      var id = htmlDom.id;
      htmlDom.value = userIndex[id];
    }
    document.getElementById('txtTaiKhoan').readOnly = true;
    document.getElementById('btnThemNV').disabled = true;
}

function  updateValueUser() {
    console.log("Chay roi")
    var nhanVien = getInfo();
    console.log(nhanVien);
    // tìm vị trí của dữ liệu cũ đang nằm trong mảng
    // var index = -1;
    for (var i = 0; i < arrUser.length; i++) {
      if (nhanVien.txtTaiKhoan == arrUser[i].txtTaiKhoan) {
        arrUser[i] = nhanVien;
      }
    }
    saveDataToLocalStorage('arrUser',arrUser);
    hienThiDuLieu();
    document.getElementById('txtTaiKhoan').readOnly = false;
    document.getElementById('btnThemNV').disabled = false;

    console.log('Cai nay cung chay roi');   
}

document.getElementById('btnCapNhat').onclick = updateValueUser;    

function deleteUser(userID) {
    console.log(userID);
    var index = -1;
    for (var i = 0; i < arrUser.length; i++) {
        if (arrUser[i].txtTaiKhoan == userID) {
            console.log(i);
            index = i;
        }
    }
    if (index != -1) {
        arrUser.splice(index, 1);
        saveDataToLocalStorage('arrUser',arrUser);
        hienThiDuLieu();
    }
  }