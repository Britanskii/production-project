import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/storeProvider"
import { getCounterValue } from "./getCounterValue"


describe("getCounterValue", () => {
	it("get counter value", () => {
		const state: DeepPartial<StateSchema> = {
			counter: { value: 10 }
		}
		expect(getCounterValue(state as StateSchema)).toEqual(10 )
	})
})
