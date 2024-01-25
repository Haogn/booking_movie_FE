import axios from "axios";
import { 
    getCustomeSuccess,
    getCustomeFailed,
    getEmployerSuccess,
    getEmployerFailed,
    getManagerSuccess,
    getManagerFailed, } from "../../reducers/userSlice";

    export const getAllCustomer = async (dispatch, token, username, page) => {
        try {
          const res = await axios.get(
            "http://localhost:6789/api/booking/v1/users/customers",
            {
              headers: { Authorization: `Bearer ${token}` },
              params: {
                username: username,
                page: page,
              },
            }
          );
          dispatch(getCustomeSuccess(res.data));
        } catch (error) {
          dispatch(getCustomeFailed());
        }
      };
export const getAllEmployer = async(distpatch,token,page)=>{
    try{
        const res = await axios.get("http://localhost:6789/api/booking/v1/users/employer",
        {
            headers: {token:`Bearer ${token}` },
            params: {
              // username: username,
              page: page,
            },
        });
        distpatch(getEmployerSuccess(res.data.content))
        console.log(res.data.content);
    }catch(error){
        distpatch(getEmployerFailed())
    }
} 

export const getAllMaganer= async(accessToken,distpatch)=>{
    try{
        const res = await axios.get("http://localhost:6789/api/booking/v1/users/manager",
        {
            headers: {token:`Bearer ${accessToken}` }
        });
        distpatch(getManagerSuccess(res.data.content))
    }catch(error){
        distpatch(getManagerFailed())
    }
} 