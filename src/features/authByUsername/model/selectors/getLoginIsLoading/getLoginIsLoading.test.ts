import { getLoginIsLoading } from "./getLoginIsLoading"
import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/storeProvider"

describe("getLoginIsLoading selector", () => {
	it("should return true if login is loading", () => {
		const state: DeepPartial<StateSchema> = {
			login: {
				isLoading: true,
			},
		}
		expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
	})

	it("should return false if login is not loading", () => {
		const state: DeepPartial<StateSchema> = {
			login: {
				isLoading: false,
			},
		}
		expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
	})

	it("should return false if login state is not present", () => {
		const state = {}
		expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
	})
})
