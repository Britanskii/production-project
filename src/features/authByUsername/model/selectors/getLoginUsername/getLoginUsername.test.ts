import { getLoginUsername } from "./getLoginUsername"
import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/storeProvider"

describe("getLoginUsername selector", () => {
	it("should return the login username from state", () => {
		const state: DeepPartial<StateSchema> = {
			login: {
				username: "user123",
			},
		}
		expect(getLoginUsername(state as StateSchema)).toEqual("user123")
	})

	it("should return an empty string if login username is not present", () => {
		const state = {}
		expect(getLoginUsername(state as StateSchema)).toEqual("")
	})
})
