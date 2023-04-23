import { componentRender } from "shared/lib/tests/componentRender"
import { LoginModal } from "features/authByUsername"

describe("LoginModal component", () => {
	it("LoginModal test", () => {
		const onClose = () => {
			console.log("test")
		}
		const { getByTestId } = componentRender(<LoginModal isOpen={false} onClose={onClose} />)
	})
})
