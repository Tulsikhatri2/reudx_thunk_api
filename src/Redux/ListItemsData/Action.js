import axios from "axios";
const API_URL = "https://listtimes.onrender.com/api/todo";

export const fetchData = () => {
        return async (dispatch) => {
                const response = await axios.get(API_URL)
                dispatch(fetchDataSuccess(response.data))
        }
}

export const createData = async (listItem) => {
        const response = await axios.post(API_URL + "/", listItem)
        return response
}

export const deleteData = async (_id) => {
        const response = await axios.delete(API_URL + '/' + _id);
        return response
}

export const updateData = async (item) => {
        const response = await axios.put(API_URL + '/' + item._id, { title: item.title, description: item.description });
        return response.data
}

export const fetchDataSuccess = (list) => ({
        type: "FETCH_DATA_SUCCESS",
        payload: list
})

export const creteListData = (listData) => ({
        type: "CREATE_LIST_DATA",
        payload: listData
})

export const deleteListData = (_id) => ({
        type: "DELETE_LIST_DATA",
        payload: _id
})

export const editListData = (listData) => ({
        type: "EDIT_LIST_DATA",
        payload: listData
})

export const updateListData = (updatedData) => ({
        type: "UPDATE_LIST_DATA",
        payload: updatedData
})

