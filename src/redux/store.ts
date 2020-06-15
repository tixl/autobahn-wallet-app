import AsyncStorage from '@react-native-community/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import { introReducer } from './reducer';

const rootReducer = combineReducers({
  intro: introReducer,
});

const middleware = [thunk];

/**
 * Setup Redux Persist
 */

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
  // whitelist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Setup & Export Store
 */

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

const persistor = persistStore(store);

export { persistor, store };
