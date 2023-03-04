import { createSlice } from '@reduxjs/toolkit'

export const initialState = []

export const TodoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        addContact: (state, action) => {
            const { payload } = action
            state.push(payload)
        },
        deleteContact: (state, action) => {
            //action => {payload:pass arg}
            const { payload } = action
            const index = state.findIndex(state => state.id === payload)
            state.splice(index, 1)
        },
        updateContact: (state , action) => {
            const { payload } = action
            const index = state.findIndex(state => state.id === payload.id)
            state[index] = payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { addContact, deleteContact, updateContact } = TodoSlice.actions

export default TodoSlice.reducer