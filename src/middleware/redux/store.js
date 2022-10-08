import { configureStore } from "@reduxjs/toolkit";
import Reducers from "./reducers/reducers";





const store = configureStore({
    reducer : Reducers
});

export default store;