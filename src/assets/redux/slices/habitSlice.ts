import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type updateState = {
    id: number,
    name: string
}
const habitSlice = createSlice({
    name: "habits",
    initialState: {
        habits: [] as string[]
    },
    reducers: {
        newHabit: (state, action: PayloadAction<string>)=> {
            state.habits.unshift(action.payload);

        },
        updateHabit: (state, action: PayloadAction<updateState>)=> {
            const {id, name} = action.payload
            state.habits[id] = name
        },
        deleteHabit: (state, action: PayloadAction<number>)=> {
            state.habits.filter((_, index)=> index !== action.payload)
        }
    }
})
export const {newHabit, updateHabit, deleteHabit} = habitSlice.actions;
export default habitSlice;