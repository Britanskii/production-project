import { componentRender } from "shared/lib/tests/componentRender"
import { User } from "./User"

describe("User component", () => {
	it("User test", () => {
		const { getByTestId } = componentRender(<User/>)
	})
})
