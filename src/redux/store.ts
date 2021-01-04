import AsyncStorage from '@react-native-community/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import { introReducer, exampleReducer, uiReducer } from './reducer';

const rootReducer = combineReducers({
  intro: introReducer,
  example: exampleReducer,
  ui: uiReducer,
});

const middleware = [thunk];

/**
 * Setup Redux Persist
 */

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['example', 'ui'],
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

// Export root state type
export type RootState = ReturnType<typeof rootReducer>;
