import { Zoom, toast } from "react-toastify";
import axiosInstance from "../axiosErrorHandler";


//Fetch API
export const fetchData = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get();
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
    await axiosInstance.post("/", listItem);
    dispatch({
      type: "CREATE_LIST_DATA",
      payload: listItem,
    });
    toast("Data added successfully.!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom,
    });
  } catch (error) {
    console.log(error.message);
  }
};


//Delete data from list
export const deleteListData = (_id) => async (dispatch) => {
  try {
    await axiosInstance.delete("/" + _id);
    dispatch({
      type: "DELETE_LIST_DATA",
      payload: _id,
    });
    toast.error("Data deleted successfully.!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom,
    });
  } catch (error) {
    console.log(error.message);
  }
};


//Adding data from list to form for update
export const editListData = (listData) => ({
  type: "EDIT_LIST_DATA",
  payload: listData,
});


//Add updated data into list
export const updateListData = (item) => async (dispatch) => {
  try {
    await axiosInstance.put("/" + item._id, {
      title: item.title,
      description: item.description,
    });
    dispatch({
      type: "UPDATE_LIST_DATA",
      payload: item,
    });
    toast.info("Data Updated Successfully!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom,
    });
  } catch (error) {
    console.log(error.message);
  }
};
