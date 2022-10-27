import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import compineReducers from "./Reducers/combineReducers";
import thunk from "redux-thunk";

const store = createStore(
  compineReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
// const composeEnhancers =
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const store = createStore(langReducer , composeEnhancers );

export default store;
