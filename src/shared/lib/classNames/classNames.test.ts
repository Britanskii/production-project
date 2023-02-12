import { classNames } from "shared/lib"

describe("classNames", () => {
	it("should return a string of class names", () => {
		expect(classNames(["a", "b", "c"])).toBe("a b c")
	})

	it("should add class names from the mods object", () => {
		expect(classNames(["a", "b"], { c: true, d: false })).toBe("a b c")
	})

	it("should trim the trailing space from the result", () => {
		expect(classNames(["a", "b"], { c: true })).toBe("a b c")
	})

	it("should return an empty string if there are no classes", () => {
		expect(classNames([])).toBe("")
		expect(classNames([], {})).toBe("")
	})
})
