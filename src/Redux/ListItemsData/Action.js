import axios from "axios";
import { Bounce, toast } from "react-toastify";
import axiosInstance from "../axiosErrorHandler";
const API_URL = "https://listtimes.onrender.com/api/todo";

//Fetch API
export const fetchData = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get();
    dispatch({
      type: "FETCH_DATA_SUCCESS",
      payload: response.data,
    });
    axiosInstance()
  } catch (error) {
    console.log(error.message);
  }
};

// Add data into list
export const createListData = (listItem) => async (dispatch) => {
  try {
    const response = await axiosInstance.post( '/' , listItem);
    dispatch({
      type: "CREATE_LIST_DATA",
      payload: listItem,
    });

  } catch (error) {
    console.log(error.message);
  }
};

//Delete data from list
export const deleteListData = (_id) => async (dispatch) => {
  try {
    const response = await axiosInstance.delete( "/" + _id);
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
};
}
//Add updated data into list
export const updateListData = (item) => async (dispatch) => {
  try {
    const response = await axiosInstance.put( "/" + item._id, {
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
}};

//Adding data from list to form for update
export const editListData = (listData) => ({
  type: "EDIT_LIST_DATA",
  payload: listData,
});

