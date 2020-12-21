import { createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers/reducer-root";
import rootSaga from "../sagas/index";

const sagaMiddleware = createSagaMiddleWare();
export const history = createBrowserHistory();

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const initialState = {};

export const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(routerMiddleware(history), sagaMiddleware)
);
let persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export default persistor;
