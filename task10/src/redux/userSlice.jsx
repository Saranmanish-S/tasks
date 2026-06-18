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
            },
            updateUser: (state, action) => {

                const { oldEmail, ...updatedUser } =
                    action.payload;
                
                const index = state.users.findIndex(
                    user => user && user.email === oldEmail
                );
            
                if(index !== -1){
            
                    state.users[index] = updatedUser;
            
                    state.loggedInUser = updatedUser;
                }
            }
        }
})

export const {addUser,loginUser,logoutUser,updateUser} = userSlice.actions

export default userSlice.reducer