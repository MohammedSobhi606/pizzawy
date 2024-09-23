import { configureStore } from "@reduxjs/toolkit";
import States from "./States";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { food_list } from "../assets/assets";
// redux persistence

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartItems", "cartCount", "token", "foodList"],
};

const persistedReducer = persistReducer(persistConfig, States);

const store = configureStore({
  reducer: { states: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), // Define your reducers here
});

const persistor = persistStore(store);
export { store, persistor };
