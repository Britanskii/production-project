import { getLoginPassword } from "./getLoginPassword"
import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/storeProvider"

describe("getLoginPassword selector", () => {
	it("should return the login password from state", () => {
		const state: DeepPartial<StateSchema> = {
			login: {
				password: "password123",
			},
		}
		expect(getLoginPassword(state as StateSchema)).toEqual("password123")
	})

	it("should return an empty string if login password is not present", () => {
		const state = {}
		expect(getLoginPassword(state as StateSchema)).toEqual("")
	})
})
