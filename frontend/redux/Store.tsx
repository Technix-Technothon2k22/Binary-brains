import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import RootReducer from "./RootReducer";

const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default Store;
