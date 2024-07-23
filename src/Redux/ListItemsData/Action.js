import axios from "axios";
import { Bounce, toast } from "react-toastify";
const API_URL = "https://listtimes.onrender.com/api/todo";

//Fetch API
export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL);
    dispatch({
      type: "FETCH_DATA_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Add data into list
export const createListData = (listItem) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, listItem);
    dispatch({
      type: "CREATE_LIST_DATA",
      payload: listItem,
    });
    toast.info('Data Added Successfully!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
  } catch (error) {
    console.log(error.message);
    toast.error(error.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
  }
};

//Delete data from list
export const deleteListData = (_id) => async (dispatch) => {
  try {
    const response = await axios.delete(API_URL + "/" + _id);
    dispatch({
      type: "DELETE_LIST_DATA",
      payload: _id,
    });
toast.info('Deleted Successfully!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
  } catch (error) {
    console.log(error.message);
toast.error(error.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
  }
};

//Add updated data into list
export const updateListData = (item) => async (dispatch) => {
  try {
    const response = await axios.put(API_URL + "/" + item._id, {
      title: item.title,
      description: item.description,
    });
    dispatch({
      type: "UPDATE_LIST_DATA",
      payload: item,
    });
    toast.info('Data Updated Successfully!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
  } catch (error) {
    console.log(error.message);
    toast.error(error.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
  }
};

//Adding data from list to form for update
export const editListData = (listData) => ({
  type: "EDIT_LIST_DATA",
  payload: listData,
});
