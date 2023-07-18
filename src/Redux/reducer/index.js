import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const initialState = {
  balance: 0
};

const reducer = combineReducers({
  amount: amountReducer
});

export default reducer;
