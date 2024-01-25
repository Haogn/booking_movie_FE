import React, { useState } from "react";
import { changePassword } from "../../redux/api/service/customerRequest";
import { useDispatch } from "react-redux";

function ChangePassword() {
const [oldPassword,setOldPassword] = useState("");
const [newPassword,setNewPassword] = useState("");
const [confirmPassword,setConfirmPassword] = useState("");
const dispatch = useDispatch();
const storedToken  = localStorage.getItem('acessToken');
const token = storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
? storedToken.slice(1, -1) 
: storedToken


const handleChangePassword = (e)=>{
  const password ={
    oldPassword: oldPassword,
    newPassword: newPassword,
    confirmPassword:confirmPassword
  }
  changePassword(password,dispatch,token)
}



  return (
    <div>
      <div className="bg-gray-900 text-white text-3xl font-medium font-mono text-center py-1">
        Thay đổi mật khẩu
      </div>
      <div className="mt-3 mx-auto w-[500px]">
        <form action="" onSubmit={handleChangePassword}>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Mật khẩu cũ: <span className="text-red-400">*</span>
            </label>
            <input
            onChange={(e)=>setOldPassword(e.target.value)}
            type="text" className="form-control" id="oldPassword" />
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Mật khẩu mới: <span className="text-red-400">*</span>
            </label>
            <input
            onChange={(e)=>setNewPassword(e.target.value)}
            type="text" className="form-control" id="newPassword" />
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Nhập lại mật khẩu: <span className="text-red-400">*</span>
            </label>
            <input
            onChange={(e)=>setConfirmPassword(e.target.value)}
            type="text" className="form-control" id="confirmPassword" />
          </div>
          <button
            type="submit"
            className="btn btn-dark font-mono mb-4 text-gray-950"
          >
            Lưu thay đổi
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
