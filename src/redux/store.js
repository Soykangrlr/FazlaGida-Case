import { configureStore } from '@reduxjs/toolkit'
import darkMode from './darkMode'

export const store=configureStore({
    reducer:{
       dark:darkMode
    }
})