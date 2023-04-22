import { counterReducer, counterActions } from "./counterSlice"
import { CounterSchema } from "entities/counter"

describe("counter reducer", () => {
	test("should handle increment", () => {
		const state: CounterSchema = { value: 0 }
		expect(counterReducer(state, counterActions.increment())).toEqual({ value: 1 })
	})

	test("should handle decrement", () => {
		const state: CounterSchema = { value: 1 }
		expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 0 })
	})

	test("should work with empty state", () => {
		expect(counterReducer(undefined, counterActions.decrement())).toEqual({ value: -1 })
	})
})
