import axios from "axios";


export const fetchData = () => {
    return async(dispatch) => {
        dispatch(fetchDataRequest())
        try{
        const response =await axios.get("https://listtimes.onrender.com/api/todo")
        console.log(response)
        dispatch(fetchDataSuccess(response.data))
        }
        catch(error){
        console.log(error)
        }
    }
}

export const fetchDataRequest = () => ({
        type: "FETCH_DATA"
})

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

export const updatingListData = (listData) =>({
        type: "UPDATING_DATA",
        payload: listData
})

export const updateListData = (updatedData) => ({
        type: "UPDATE_LIST_DATA",
        payload: updatedData
})

