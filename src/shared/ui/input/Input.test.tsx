import { componentRender } from "shared/lib/tests/componentRender"
import { Input } from "./Input"

describe("Input component", () => {
	it("Input test", () => {
		const { getByTestId } = componentRender(<Input/>)
	})
})
