import { combineReducers } from "redux";
import { selectReducer } from "./selectReducer";

const rootReducer = combineReducers({
  urlData: selectReducer
});

export default rootReducer;
