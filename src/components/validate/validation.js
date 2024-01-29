export const validateBlank = (text) => {
  return (text.trim() === "");
};

  
  export const validateNumber = (text) => {
    if (Number(text) <= 0) {
      return true;
    }
    return false;
  }


  export const validatePassword = (password) => {
    if (password.length < 8) {
      return false; // Đảm bảo mật khẩu có ít nhất 8 ký tự
    }
  
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumber = false;
  
    for (let i = 0; i < password.length; i++) {
      const char = password[i];
      if (!hasUpperCase && char === char.toUpperCase() && char !== char.toLowerCase()) {
        hasUpperCase = true;
      }
      if (!hasLowerCase && char === char.toLowerCase() && char !== char.toUpperCase()) {
        hasLowerCase = true;
      }
      if (!hasNumber && !isNaN(char)) {
        hasNumber = true;
      }
    }
  
    return hasUpperCase && hasLowerCase && hasNumber;
  }
  
  
  // register
  
  export const validateExistsEmail = (users, email) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email.replaceAll(" ", "") === email.replaceAll(" ", "")) {
        return true;
      }
    }
    return false;
  }
  
  export const validateExistsPhone = (users, phone) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].phone.replaceAll(" ", "") === phone.replaceAll(" ", "")) {
        return true;
      }
    }
    return false;
  }
  
  export const validateExistsEmailUpdate = (users, newEmail, oldEmail) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email.replaceAll(" ", "") === newEmail.replaceAll(" ", "") && newEmail.replaceAll(" ", "") !== oldEmail.replaceAll(" ", "")) {
        return true;
      }
    }
    return false;
  }
  
  export const validateExistsPhoneUpdate = (users, newPhone, oldPhone) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].phone.replaceAll(" ", "") === newPhone.replaceAll(" ", "") && newPhone.replaceAll(" ", "") !== oldPhone.replaceAll(" ", "")) {
        return true;
      }
    }
    return false;
  }
  
  // validate ship
  
  export const validateExistsShipName = (ships, shipName) => {
    for (let i = 0; i < ships.length; i++) {
      if (ships[i].shipName.toLowerCase().replaceAll(" ", "") === shipName.toLowerCase().replaceAll(" ", "")) {
        return true;
      }
    }
    return false;
  }
  
  export const validateExistsShipNameUpdate = (ships, newShipName, oldShipName) => {
    for (let i = 0; i < ships.length; i++) {
      if (ships[i].shipName.toLowerCase().replaceAll(" ", "") === newShipName.toLowerCase().replaceAll(" ", "") && newShipName.toLowerCase().replaceAll(" ", "") !== oldShipName.toLowerCase().replaceAll(" ", "")) {
        return true;
      }
    }
    return false;
  }
  
  // validate cateogory
  
  export const validateExistsCategoryName = (categories, categoryName) => {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].categoryName.toLowerCase().replaceAll(" ", "") === categoryName.toLowerCase().replaceAll(" ", "")) {
        return true;
      }
    }
    return false;
  }
  
  export const validateExistsCategoryNameUpdate = (categories, newCategoryName, oldCategoryName) => {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].categoryName.toLowerCase().replaceAll(" ", "") === newCategoryName.toLowerCase().replaceAll(" ", "") && newCategoryName.toLowerCase().replaceAll(" ", "") !== oldCategoryName.toLowerCase().replaceAll(" ", "")) {
        return true;
      }
    }
    return false;
  }
  
  // validate product
  
  export const validateCreatedAndDueDate = (created, dueDate) => {
    if (getYear(created) === getYear(dueDate) && getMonth(created) === getMonth(dueDate) && getDay(created) === getDay(dueDate)) {
      return true;
    }
    if (getYear(created) < getYear(dueDate)) {
      return false;
    }
    if (getYear(created) === getYear(dueDate)) {
      if (getMonth(created) <= getMonth(dueDate)) {
        if (getDay(created) <= getDay(dueDate)) {
          return false;
        }
      }
    }
    return true;
  }
  
  // json dd/MM/yyyy
  const getDay = (date) => {
    let arr = date.split("/");
    return arr[0];
  }
  
  const getMonth = (date) => {
    let arr = date.split("/");
    return arr[1];
  }
  
  const getYear = (date) => {
    let arr = date.split("/");
    return arr[2];
  }