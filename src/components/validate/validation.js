import moment from 'moment';

export const validateBlank = (text) => {
  return text + "".trim() === "";
};

export const validateNumber = (text) => {
  if (Number(text) <= 0) {
    return true;
  }
  return false;
};

// register

export const validateEmail = (email) => {
  // Biểu thức chính quy để kiểm tra email hợp lệ
  const regex = /^[A-Za-z0-9+_.-]+@(.+)$/;

  // Kiểm tra địa chỉ email có hợp lệ theo biểu thức chính quy
  return regex.test(email);
};


export const validatePhoneNumber = (phoneNumber) => {
  // Biểu thức chính quy để kiểm tra số điện thoại hợp lệ
  const regex = /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/;

  // Kiểm tra số điện thoại có hợp lệ theo biểu thức chính quy
  return regex.test(phoneNumber);
};

export const validatePassword = (password) => {
  if (password.length < 8) {
    return false; // Đảm bảo mật khẩu có ít nhất 8 ký tự
  }

  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasNumber = false;

  for (let i = 0; i < password.length; i++) {
    const char = password[i];
    if (
      !hasUpperCase &&
      char === char.toUpperCase() &&
      char !== char.toLowerCase()
    ) {
      hasUpperCase = true;
    }
    if (
      !hasLowerCase &&
      char === char.toLowerCase() &&
      char !== char.toUpperCase()
    ) {
      hasLowerCase = true;
    }
    if (!hasNumber && !isNaN(char)) {
      hasNumber = true;
    }
  }

  return hasUpperCase && hasLowerCase && hasNumber;
}; 



// validate dateOfBirth

export const validateDateOfBirth = (dateOfBirth) => {
  const dateFormat = 'YYYY-MM-DD'; 

  // Kiểm tra định dạng ngày tháng
  if (!moment(dateOfBirth, dateFormat, true).isValid()) {
    return 'Ngày tháng năm sinh không đúng định dạng (YYYY-MM-DD).'; 
  }


  if (moment(dateOfBirth, dateFormat).isAfter(moment())) {
    return 'Ngày tháng năm sinh không thể là ngày trong tương lai.';
  }
  
  // Kiểm tra tuổi (ví dụ: ít nhất 13 tuổi)
  if (moment().diff(moment(dateOfBirth, dateFormat), 'years') < 13) {
    return 'Bạn cần phải từ 13 tuổi trở lên.';
  }
  
  return true; 
};
