import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Services/todoSlice'

export const store=configureStore({
    reducer:todoReducer,
})