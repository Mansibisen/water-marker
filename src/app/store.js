import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/media/counterSlice'
export default configureStore({
  reducer: {
    Images: counterReducer,
  },
})