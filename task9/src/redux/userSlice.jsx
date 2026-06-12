import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
        name : "users",

        initialState: {
            users: [],
            loggedInUser: null
        },

        reducers: {
            addUser: (state, action) => {
                state.users.push(action.payload)
            },
            loginUser: (state,action) => {
                state.loggedInUser = action.payload
            },
            logoutUser: (state,action) => {
                state.loggedInUser = null
            }
        }
})

export const {addUser,loginUser,logoutUser} = userSlice.actions

export default userSlice.reducer