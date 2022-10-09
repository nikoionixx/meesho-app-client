import { combineReducers } from "redux";
import ProductReducer from "./product/product.reducer";
import { UserReducer } from "./user/user.reducer";


const Reducers = combineReducers({
   user : UserReducer ,
   product: ProductReducer
});

export default Reducers;