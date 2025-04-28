import { configureStore } from "@reduxjs/toolkit";
import habitReducer from './slices/habitSlice'

const store = configureStore({
    reducer : {
        habits: habitReducer.reducer
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store