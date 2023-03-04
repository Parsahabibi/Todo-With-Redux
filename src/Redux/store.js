import { configureStore } from '@reduxjs/toolkit'
import TodoSlice from './slice/Todo.Reducer'
export const store = configureStore({
  reducer: {
    Todo : TodoSlice
  },
})