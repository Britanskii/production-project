import { getLoginError } from "./getLoginError"
import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/storeProvider"

describe("getLoginError selector", () => {
	it("should return the login error from state", () => {
		const state: DeepPartial<StateSchema> = {
			login: {
				error: "Invalid username or password",
			},
		}
		expect(getLoginError(state as StateSchema)).toEqual("Invalid username or password")
	})

	it("should return undefined if login state is not present", () => {
		const state = {}
		expect(getLoginError(state as StateSchema)).toBeUndefined()
	})
})
