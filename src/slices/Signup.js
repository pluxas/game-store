import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    userName: '',
    user: null,
}

export const SignUp = createSlice({
    name: 'SignUp',
    initialState,
    reducers: {
        setEmail(state, {payload}) {
            state.email = payload
        },
        setPassword(state, {payload}) {
            state.password = payload
        },
        setFirstName(state, {payload}) {
            state.firstName = payload
        },
        setLastName(state, {payload}) {
            state.lastName = payload
        },
        setUser(state, {payload}) {
            state.user = payload
        },
        setUserName(state, {payload}) {
            state.userName = payload
        }
    }
})

export const {setEmail, setFirstName, setPassword, setLastName, setUser, setUserName} = SignUp.actions
export default SignUp.reducer