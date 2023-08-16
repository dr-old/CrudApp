import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/redux/sagas/index';
import rootReducer from './src/redux/reducers/index';

const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['generalReducer'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
// let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});
let persistor = persistStore(store, {});

sagaMiddleware.run(rootSaga);

export {store, persistor};
