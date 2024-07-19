import { combineReducers } from "redux";
import crudReducer from "./ListItemsData/Reducer";

const rootReducer = combineReducers({
    crud: crudReducer
})
export default rootReducer