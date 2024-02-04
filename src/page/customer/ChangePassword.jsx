import React, { useState } from "react";
import { changePassword } from "../../redux/api/service/customerRequest";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  validateBlank,
  validatePassword,
} from "../../components/validate/validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetErrorChangePass } from "../../redux/reducers/customerSlice";

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validateOld, setValidateOld] = useState(null);
  const [validateNew, setValidateNew] = useState(null);
  const [validateConfirm, setValidateConfirm] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;

  const errorChangePassword = useSelector(
    (state) => state.customer.changePassword.error
  );

  console.log(errorChangePassword);
  const handleChangePassword = (e) => {
    e.preventDefault();
    dispatch(resetErrorChangePass())
    if (validateBlank(oldPassword)) {
      return setValidateOld("Không được để trống");
    }

    setValidateOld(null);
    if (validateBlank(newPassword)) {
      return setValidateNew("Không được để trống");
    }
    if (!validatePassword(newPassword)) {
      return setValidateNew(
        "Cần ít nhất 1 kí tự viết hoa,1 kí tự viết thường, 1 số"
      );
    }
    setValidateNew(null);

    if (validateBlank(confirmPassword)) {
      return setValidateConfirm("Không được để trống");
    }
    if (!validatePassword(confirmPassword)) {
      return setValidateConfirm(
        "Cần ít nhất 1 kí tự viết hoa,1 kí tự viết thường, 1 số"
      );
    }
    setValidateConfirm(null)
    const password = {
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmNewPassword: confirmPassword,
    };
    changePassword(password, dispatch, navigate, token, toast);
  };

  return (
    <div>
      <ToastContainer className="custom-toast-container" />
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
              onChange={(e) => setOldPassword(e.target.value)}
              type="password"
              className="form-control"
              id="oldPassword"
            />
            {validateOld && <span className="text-red-500">{validateOld}</span>}
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Mật khẩu mới: <span className="text-red-400">*</span>
            </label>
            <input
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              className="form-control"
              id="newPassword"
            />
            {validateNew && <span className="text-red-500">{validateNew}</span>}
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Nhập lại mật khẩu: <span className="text-red-400">*</span>
            </label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              className="form-control"
              id="confirmPassword"
            />
            {validateConfirm && (
              <span className="text-red-500">{validateConfirm}</span>
            )}
            {errorChangePassword && (<span className="text-red-500">{errorChangePassword.data}</span>)}
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
