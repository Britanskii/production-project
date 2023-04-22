import { getCounter } from "entities/counter/model/selectors/getCounter/getCounter"
import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/storeProvider"

describe("getCounter", () => {
	it("should return counter value", () => {
		const state: DeepPartial<StateSchema> = {
			counter: { value: 10 }
		}
		expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
	})
})
