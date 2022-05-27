import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import RootReducer from "./RootReducer";
import { createWrapper } from "next-redux-wrapper";

export const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

const makeStore = () => Store;

export const wrapper = createWrapper(makeStore);
