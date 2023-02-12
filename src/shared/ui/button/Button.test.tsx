import { render, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { Button, ThemeButton } from "./Button"

afterEach(cleanup)

describe("Button component", () => {
	it("renders a button element with the correct class names", () => {
		const { getByText } = render(<Button>Click me</Button>)
		const button = getByText("Click me")
		expect(button).toHaveClass("button")
	})

	it("renders a button element with the correct class names and theme", () => {
		const { getByText } = render(<Button theme={ThemeButton.CLEAR}>Click me</Button>)
		const button = getByText("Click me")
		expect(button).toHaveClass("button")
		expect(button).toHaveClass("clear")
	})

	it("renders a button element with the correct class names, theme and custom class name", () => {
		const { getByText } = render(<Button className="custom-class" theme={ThemeButton.CLEAR}>Click me</Button>)
		const button = getByText("Click me")
		expect(button).toHaveClass("button")
		expect(button).toHaveClass("clear")
		expect(button).toHaveClass("custom-class")
	})
})
