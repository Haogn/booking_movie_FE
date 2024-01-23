import axios from "axios";
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "../../reducers/authSlice";

export const loginUser = async(user,dispath,navigate)=>{
    dispath(loginStart())
    try{
        const res = await axios.post("http://localhost:6789/api/booking/v1/auth/login",user)
        dispath(loginSuccess(res.data))
        navigate("/")
    }catch(error){
        dispath(loginFailed());
    }
};

export const registerUser = async(user,dispath,navigate)=>{
    dispath(registerStart())
    try{
        const res = await axios.post("http://localhost:6789/api/booking/v1/auth/register",user)
        dispath(registerSuccess(res.data))
        navigate("/login")
    }catch(error){
        dispath(registerFailed());
    }
};