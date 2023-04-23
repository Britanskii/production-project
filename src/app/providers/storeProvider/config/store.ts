import { configureStore, ReducersMapObject } from "@reduxjs/toolkit"
import { counterReducer } from "entities/counter"
import { StateSchema } from "./StateSchema"
import { userReducer } from "entities/user"

export const createReduxStore = (initialState?: StateSchema) => {
	const rootReducers: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer
	}

	return configureStore<StateSchema>({
		reducer: rootReducers,
		devTools: __IS_DEV__,
		preloadedState: initialState
	})
}
