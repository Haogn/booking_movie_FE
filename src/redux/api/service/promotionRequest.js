import axios from "axios";
import {
  getAllEventStart,
  getAllEventSuccess,
  getAllEventFailed,
  getEventFailed,
  getEventStart,
  getEventSuccess,
  createEventStart,
  createEventFailed,
  createEventSuccess,
  selectAllEventStart,
  selectAllEventSuccess,
  selectAllEventFailed,
  editEventStart,
  editEventSuccess,
  editEventFailed,
  deleteEventStart,
  deleteEventSuccess,
  deleteEventFailed,
} from "../../reducers/eventSlice";

export const getEvent = async (dispatch, id, navigate) => {
  dispatch(getEventStart());
  try {
    const res = await axios.get(
      `http://localhost:6789/api/booking/v1/promotion/${id}`
    );
    dispatch(getEventSuccess(res.data));
    navigate("/admin/edit-event");
  } catch (e) {
    dispatch(getEventFailed(e.response));
  }
};

export const selectAllEvent = async (dispatch, token, page, seach) => {
  dispatch(selectAllEventStart());
  try {
    const res = await axios.get(
      "http://localhost:6789/api/booking/v1/promotion",
      {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          page: page,
          search: seach,
        },
      }
    );
    dispatch(selectAllEventSuccess(res.data));
  } catch (err) {
    dispatch(selectAllEventFailed(err.response));
  }
};

export const getAllEvent = async (dispatch) => {
  dispatch(getAllEventStart());
  try {
    const res = await axios.get(
      "http://localhost:6789/api/booking/v1/promotion/list"
    );
    dispatch(getAllEventSuccess(res.data));
  } catch (err) {
    dispatch(getAllEventFailed(err.response));
  }
};

export const createEvent = async (eventCreate, dispatch, token, navigate) => {
  dispatch(createEventStart());
  try {
    const res = await axios.post(
      "http://localhost:6789/api/booking/v1/promotion",
      eventCreate,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    dispatch(createEventSuccess(res.data));
    navigate("/admin/list-event");
  } catch (err) {
    dispatch(createEventFailed(err.response));
  }
};

export const editEvent = async (eventEdit, dispatch, navigate, token) => {
  dispatch(editEventStart());
  try {
    debugger;
    const res = await axios.put(
      "http://localhost:6789/api/booking/v1/promotion",
      eventEdit,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    dispatch(editEventSuccess(res.data));
    navigate("/admin/list-event");
  } catch (err) {
    dispatch(editEventFailed(err.response));
  }
};

export const deleteEvent = async (id, dispatch, navigate, token) => {
  dispatch(deleteEventStart());
  try {
    const res = await axios.delete(
      `http://localhost:6789/api/booking/v1/promotion/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    dispatch(deleteEventSuccess(res.data));
    navigate("/admin/list-event");
  } catch (err) {
    dispatch(deleteEventFailed(err.response));
  }
};
