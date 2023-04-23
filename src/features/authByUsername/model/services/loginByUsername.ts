import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { User, userActions } from "entities/user"
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage"
import { ValueOf } from "shared/lib"

interface LoginByUsernameProps {
	username: string
	password: string
}

export const LoginError = {
	INCORRECT_DATA: "401",
	SERVER_ERROR: "404"
} as const

export type LoginError = ValueOf<typeof LoginError>

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
	"login/loginByUsername",
	async ({ username, password }, thunkAPI) => {
		try {
			const response = await axios.post<User>("http://localhost:8000/login", { username, password })

			if (!response.data) {
				throw new Error()
			}

			localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
			thunkAPI.dispatch(userActions.setAuthData(response.data))

			return response.data
		} catch (error) {
			console.error(error)
			return thunkAPI.rejectWithValue(LoginError.INCORRECT_DATA)
		}
	}
)
