import { configureStore } from "@reduxjs/toolkit"; 
import AuthReducer from "./features/authSlice"
import SellReducer from "./features/sellSlice"
import PredictReducer from "./features/predictSlice"


export default configureStore ({
    reducer: {
        auth: AuthReducer,
        sell: SellReducer,
        predict: PredictReducer,
    },
});