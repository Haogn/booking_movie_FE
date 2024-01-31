import axios from "axios";
import { startBuySuccess,startBuyFailed, getLocationSuccess, getLocationFailed, getMovieInformationSuccess, getMovieInformationFailed, getChairStatusSuccess, getChairStatusFailed, getRoomMovieSuccess, getRoomMovieFailed } from "../../reducers/orderSlice";

export const createOrder = async()=>{
    try{
        const res = await axios.post()

    }catch{

    }
}

export const startBuy = async(dispatch, idMovie, selectDate, roomType, locationName) => {
    try {
        const res = await axios.get(`http://localhost:6789/api/booking/v1/view/${idMovie}`, {
            params: {
                selectDate: selectDate,
                roomType: roomType,
                locationName: locationName
            }
        });
        console.log("Xuất chiếu: ");
        console.log(res.data);
        dispatch(startBuySuccess(res.data));
    } catch (error) {
        dispatch(startBuyFailed(error.response));
    }
};


export const getLocation = async (dispatch, idMovie, selectDate, roomType, callback) => {
    try {
        const res = await axios.get(`http://localhost:6789/api/booking/v1/view/locationOfMovie/${idMovie}`, {
            params: {
                selectDate: selectDate,
                roomType: roomType,
            }
        });
        dispatch(getLocationSuccess(res.data));
        if (callback) callback();
    } catch (error) {
        dispatch(getLocationFailed(error.response));
    }
};


export const getMovieInform = async (dispatch,navigate ,idMovie) => {
    try {
        const res = await axios.get(`http://localhost:6789/api/booking/v1/movie/${idMovie}`);
        console.log(res.data);
        dispatch(getMovieInformationSuccess(res.data))
        navigate("/booking")
    } catch (error) {
        dispatch(getMovieInformationFailed(error.response));
    }
};


export const getRoom = async (dispatch, idMovie, startTime, roomType, theaterName, selectDate) => {
    try {
        const response = await axios.get(`http://localhost:6789/api/booking/v1/view/room`, {
            params: {
                idMovie: idMovie,
                startTime: startTime,
                roomType: roomType,
                theaterName: theaterName,
                selectDate: selectDate,
            }
        });
        console.log("Phòng:", response.data);
        dispatch(getRoomMovieSuccess(response.data));
        return response.data; // Trả về dữ liệu phòng từ API
    } catch (error) {
        console.error("Lỗi khi lấy thông tin phòng:", error);
        dispatch(getRoomMovieFailed(error.response));
        return []; // Trả về một mảng rỗng nếu có lỗi
    }
};



export const getChair = async (dispatch, idRoom, startTime) => {
    try {
        const res = await axios.get(`http://localhost:6789/api/booking/v1/view/chair`, {
            params: {
                idRoom: idRoom,
                startTime: startTime,
            }
        });
        console.log("ghế:");
        console.log(res.data);
        dispatch(getChairStatusSuccess(res.data));
    } catch (error) {
        dispatch(getChairStatusFailed(error.response));
    }
};