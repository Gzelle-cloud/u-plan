import { configureStore } from '@reduxjs/toolkit'
import ideas from './ideasSlice'
import workshop from './workshopSlice'

export const store = configureStore({
  reducer: {
    ideas,
    workshop
  },
})