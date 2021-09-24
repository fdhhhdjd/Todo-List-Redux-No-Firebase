import { combineReducers } from "redux";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import todoReducer from "./Reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["data"],
};

const rootReducer = combineReducers({
  data: todoReducer,
});
// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;
