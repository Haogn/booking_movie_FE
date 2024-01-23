import axios from "axios";
import { getCustomeFailed, getCustomeSuccess, getEmployerFailed, getEmployerSuccess, getManagerFailed, getManagerSuccess } from "../../reducers/userSlice";

export const getAllCustomer = async(accessToken,distpatch)=>{
    distpatch.getCustomerStart()
    try{
        const res = await axios.get("http://localhost:6789/api/booking/v1/user/customer",
        {
            headers: {token:`Bearer ${accessToken}` }
        });
        distpatch(getCustomeSuccess(res.data))

    }catch(error){
        distpatch(getCustomeFailed())
    }
} 

export const getAllEmployer = async(accessToken,distpatch)=>{
    distpatch.getEmployerStart()
    try{
        const res = await axios.get("http://localhost:6789/api/booking/v1/user/employer",
        {
            headers: {token:`Bearer ${accessToken}` }
        });
        distpatch(getEmployerSuccess(res.data))

    }catch(error){
        distpatch(getEmployerFailed())
    }
} 

export const getAllMaganer= async(accessToken,distpatch)=>{
    distpatch.getManagerStart()
    try{
        const res = await axios.get("http://localhost:6789/api/booking/v1/user/manager",
        {
            headers: {token:`Bearer ${accessToken}` }
        });
        distpatch(getManagerSuccess(res.data))

    }catch(error){
        distpatch(getManagerFailed())
    }
} 