import { componentRender } from "shared/lib/tests/componentRender"
import { LoginForm } from "features/authByUsername/ui/loginForm/LoginForm"

describe("LoginForm component", () => {
	it("LoginForm test", () => {
		const { getByTestId } = componentRender(<LoginForm/>)
	})
})
