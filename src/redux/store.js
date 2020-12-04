import { createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import rootReducer from "./reducers/reducer-root";
import rootSaga from "../sagas/index";

const sagaMiddleware = createSagaMiddleWare();

const initialState = {};

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
