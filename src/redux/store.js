import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";

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
import storage from "redux-persist/lib/storage";

//  створення persisted для локал сторич
const persistedAuthReducer = persistReducer(
  {
  key: "root",
    storage,
  whitelist: [`token`]
}, authReducer);


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    // auth: authReducer,
    //  після створення persistedAuthReducer який тепер відповідає за auth
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)


// login & password: ukraine2024@gmail.com
