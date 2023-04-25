import axios from "axios"
import { loginByUsername } from "./loginByUsername"
import { userActions } from "entities/user"
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk"

jest.mock("axios")

const mockedAxios = jest.mocked(axios, true)

describe("loginByUsername thunk", () => {
	const mockUser = { id: "1", username: "John Doe" }
	const mockLoginData = { username: "johndoe", password: "password123" }


	it("success login", async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: mockUser }))

		const thunk = new TestAsyncThunk(loginByUsername)
		const result = await thunk.callThunk(mockLoginData)

		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(mockUser))
		expect(thunk.dispatch).toHaveBeenCalledTimes(3)
		expect(mockedAxios.post).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("fulfilled")
		expect(result.payload).toBe(mockUser)
	})

	it("error login", async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ status: "403" }))

		const thunk = new TestAsyncThunk(loginByUsername)
		const result = await thunk.callThunk(mockLoginData)

		expect(thunk.dispatch).toHaveBeenCalledTimes(2)
		expect(mockedAxios.post).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("rejected")
	})

})
