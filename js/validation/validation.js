function checkEmptyValue(value, errorId) {
    if (value) {
      document.getElementById(errorId).innerHTML = '';
      console.log('Có chạy luôn');
      return true;
    } else {
      document.getElementById(errorId).innerHTML = 'Vui lòng không bỏ trống';
      console.log('Có chạy luôn 2');
      return false;
    }
}

// function checkMinMax(value, errorId, min, max){
//     var valueLenght =value.trim().lenght;
//     if(valueLenght >= min && valueLenght <= max){
//         document.getElementById(errorId).innerHTML = '';
//         console.log('Check min max OK');
//         return true;
//     }else{
//         document.getElementById(errorId).innerHTML =`Vui lòng nhập dữ liệu trong khoảng ${min} ký tự và ${max} ký tự`;
//         console.log('check min mã fail lòi');
//         return false;
//     }
// }
function checkMinMax(value, errorId, min, max) {
    // hàm trim hỗ trợ loại bỏ khoảng trắng ở đầu và cuối
    var doDaiKyTu = value.trim().length;
    if (doDaiKyTu >= min && doDaiKyTu <= max) {
      // dữ liệu chuẩn phù hợp với độ dài yêu cầu
      document.getElementById(errorId).innerHTML = '';
      return true;
    } else {
      // độ dài chuỗi không nằm trong khoảng từ min tới max
      document.getElementById(
        errorId
      ).innerHTML = `Vui lòng nhập dữ liệu trong khoảng ${min} ký tự và ${max} ký tự`;
      return false;
    }
  }

function checkNumber(value,errorId,min,max){
    value = value *1;
    min = min *1;
    max = max *1;
    if(value >=min && value <=max){
        document.getElementById(errorId).innerHTML = '';
        return true;
    }else{
        document.getElementById(errorId).innerHTML =`Lương tối thiểu là ${min} và tối đa là ${max}`;
        return false;
    }
}

function checkEmailValue(value, errorId) {
    var regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var checkEmail = regexEmail.test(value);
    if (checkEmail) {
        document.getElementById(errorId).innerHTML = '';
        return true;
    } else {
        document.getElementById(errorId).innerHTML =
        'Vui lòng nhập đúng định dạng email';
        return false;
    }
}


function checkUserName(value,errorId){
    var regexUserName= /^[A-Za-z]+$/;
    var checkUserName = regexUserName.test(value);
    if(checkUserName){
        document.getElementById(errorId).innerHTML = '';
        console.log('Có chạycheck tên');
        return true;
    }else{
        document.getElementById(errorId).innerHTML =
        'Tên nhân viên phải là chữ';
        console.log('Có chạy check ten nhung fail');
        return false;
    }
}


function checkPassword(value,errorId){
    var regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,10}$/;
    var checkPass = regexPassword.test(value);
    if(checkPass){
        document.getElementById(errorId).innerHTML = '';
        return true;
    }else{
        document.getElementById(errorId).innerHTML =
        'Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt';
        return false;
    }
}

function checkDateFormat(value,errorId){
  var regexDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  var checkRegexDate = regexDate.test(value);
  if(checkRegexDate){
    document.getElementById(errorId).innerHTML = '';
    return true;
  }else{
    document.getElementById(errorId).innerHTML = 'Vui lòng nhập đúng định đạng ngày tháng hoặc chọn từ lịch';
    return false;
  }
}


