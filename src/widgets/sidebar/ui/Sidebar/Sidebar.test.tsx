import React from "react"
import {  cleanup, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { Sidebar } from "./Sidebar"
import { renderWithTranslation } from "shared/lib"

afterEach(cleanup)

describe("Sidebar component", () => {
	it("renders the sidebar component with the correct class names", () => {
		const { getByTestId } = renderWithTranslation(<Sidebar />)
		const sidebar = getByTestId("sidebar")
		expect(sidebar).toHaveClass("sidebar")
	})

	it("renders the sidebar component with the correct class names and custom class name", () => {
		const { getByTestId } = renderWithTranslation(<Sidebar className="custom-class"/>)
		const sidebar = getByTestId("sidebar")
		expect(sidebar).toHaveClass("sidebar")
		expect(sidebar).toHaveClass("custom-class")
	})

	it("renders the collapsed sidebar component", () => {
		const { getByTestId } = renderWithTranslation(<Sidebar />)
		const sidebar = getByTestId("sidebar")
		const toggleButton = getByTestId("sidebar-toggle")
		fireEvent.click(toggleButton)
		expect(sidebar).toHaveClass("collapsed")
	})
})
