import { combineReducers, configureStore } from '@reduxjs/toolkit'
import TodoSlice from './slice/Todo.Reducer'
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}
const allReducer = combineReducers({
  Todo: TodoSlice,
})

const allPersistReducer = persistReducer(persistConfig, allReducer)


export const store = configureStore({
  reducer: allPersistReducer
})


export const persistor = persistStore(store)