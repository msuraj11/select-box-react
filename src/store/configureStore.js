import { createStore, applyMiddleware } from "redux";
//import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
// import thunk from 'redux-thunk';
import rootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const value = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return value;
};
//Middleware is used to connect action and reducers
export default configureStore;
