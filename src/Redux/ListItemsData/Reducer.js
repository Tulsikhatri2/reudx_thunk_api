import axios from "axios"
const initialState = {
    list:[],
    loading : false,
    error : null
}

const crudReducer = (state = initialState,action) => {

    switch(action.type){

        case "FETCH_DATA":
            return{
              ...state
            }
        
        case "FETCH_DATA_SUCCESS":
            return{
                ...state,
                list:action.payload
            }

        case "DELETE_LIST_DATA":
            const index = action.payload
            const afterDelete = axios.delete("https://listtimes.onrender.com/api/todo/" + index)
            return{
                ...state,
                list: afterDelete
            }

        case "CREATE_LIST_DATA":
            const listInfo = action.payload
            const data = axios.post("https://listtimes.onrender.com/api/todo/", listInfo)
            return{
                ...state,
                list: [data, ...state.list]
            }

        case "UPDATING_DATA":
            return{
                
            }

        case "UPDATE_LIST_DATA":
            const updated = action.payload
            const id = action.payload.id
            const updatedInfo = axios.put(`https://listtimes.onrender.com/api/todo/${id}`,updated)
            return{
                ...state,
                list: updatedInfo
            }

        default:
            return state
    }
}

export default crudReducer