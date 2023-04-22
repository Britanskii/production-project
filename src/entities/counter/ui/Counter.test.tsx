import { componentRender } from "shared/lib/tests/componentRender"
import { Counter } from "entities/counter"
import { userEvent } from "@storybook/testing-library"

describe("Counter", () => {
	it("initial", () => {
		const { getByTestId } = componentRender(<Counter/>, {
			initialValue: { counter: { value: 10 } }
		})
		expect(getByTestId("value-title")).toHaveTextContent("10")
	})

	it("increment", () => {
		const { getByTestId } = componentRender(<Counter/>, {
			initialValue: { counter: { value: 10 } }
		})
		userEvent.click(getByTestId("inc-button"))
		expect(getByTestId("value-title")).toHaveTextContent("11")
	})

	it("decrement", () => {
		const { getByTestId } = componentRender(<Counter/>, {
			initialValue: { counter: { value: 10 } }
		})
		userEvent.click(getByTestId("dec-button"))
		expect(getByTestId("value-title")).toHaveTextContent("9")
	})
})
