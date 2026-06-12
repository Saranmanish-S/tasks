import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import storageModule from "redux-persist/lib/storage"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";

  
const storage = storageModule.default

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["users"]
}

const persistedReducer = persistReducer(
    persistConfig,
    userReducer
)

export const store = configureStore({
    reducer: {
        user: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [
              FLUSH,
              REHYDRATE,
              PAUSE,
              PERSIST,
              PURGE,
              REGISTER,
            ],
          },
        }),
})
export const persistor = persistStore(store); 