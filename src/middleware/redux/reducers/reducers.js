import { combineReducers } from "redux";
import { UserReducer } from "./user/user.reducer";


const Reducers = combineReducers({
   user : UserReducer 
});

export default Reducers;