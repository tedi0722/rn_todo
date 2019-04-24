import { AsyncStorage } from "react-native";
import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";
import { persistStore, persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  todoReducer
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
