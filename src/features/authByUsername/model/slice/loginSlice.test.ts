import { DeepPartial } from "@reduxjs/toolkit"
import { loginReducer, loginActions } from "./loginSlice"
import { LoginSchema } from "features/authByUsername"

describe("loginSlice", () => {
	it("setUsername action sets the correct username", () => {
		const state: DeepPartial<LoginSchema> = { username: "user" }
		expect(loginReducer(state as LoginSchema,
			loginActions.setUsername("new user"))).toEqual({ username: "new user" })
	})

	it("setPassword action sets the correct password", () => {
		const state: DeepPartial<LoginSchema> = { password: "qwerty" }
		expect(loginReducer(state as LoginSchema,
			loginActions.setPassword("veryhardpassword"))).toEqual({ password: "veryhardpassword" })
	})
})
