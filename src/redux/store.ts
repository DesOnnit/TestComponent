import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userSlice from 'redux/slices/user';

const rootReducer = combineReducers({ currentUser: userSlice });

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// При использовании Redux-Persist, необходимо специально игнорировать все типы действий, которые он отправляет
// https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
const ignoredActions = [FLUSH, PAUSE, PERSIST, PURGE, REGISTER];

export const setupStore = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: { ignoredActions } }).prepend()
});
export const persistor = persistStore(setupStore);
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof setupStore;
export type AppDispatch = AppStore['dispatch'];
