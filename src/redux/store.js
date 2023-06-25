import { configureStore } from "@reduxjs/toolkit";
import { heroesReducer } from "./heroes/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
  key: "heroes",
  version: 1,
  storage,
};

const reducer = combineReducers({
  heroes: heroesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// export default store;
export const persistor = persistStore(store);
// import { configureStore } from "@reduxjs/toolkit";
// import { heroesReducer } from "./heroes/slice";

// export const store = configureStore({
//   reducer: {
//     heroes: heroesReducer,
//   },
// });

// export default store;
