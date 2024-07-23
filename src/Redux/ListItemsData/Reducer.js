const initialState = {
    list: [],
    edit: { list: {}, isEdit: false }
}


const crudReducer = (state = initialState, action) => {

    switch (action.type) {
        case "FETCH_DATA":
            return {
                ...state
            }

        case "FETCH_DATA_SUCCESS":
            return {
                ...state,
                list: action.payload
            }

        case "CREATE_LIST_DATA":
            const listInfo = action.payload
            const data = [...state.list]
            data.push(listInfo)
            return {
                ...state,
                list: data,
            }


        case "DELETE_LIST_DATA":
            const _id = action.payload
            const info = [...state.list]
            return {
                ...state,
                list: info.filter((data) => data._id !== _id)
            }

        case "EDIT_LIST_DATA":
            return {
                ...state,
                edit: { list: action.payload, isEdit: true }
            }

        case "UPDATE_LIST_DATA":
            return {
                ...state,
                list: state.list.map((item) => item._id === action.payload._id ? action.payload : item),
                edit: { list: {}, isEdit: false }
            }

        default:
            return state
    }
}

export default crudReducer