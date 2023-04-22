import { configureStore } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/storeProvider/ui/StateShema"
import { counterReducer } from "entities/counter"

export const createReduxStore = (initialState?: StateSchema) => {
	return configureStore<StateSchema>({
		reducer: {
			counter: counterReducer
		},
		devTools: __IS_DEV__,
		preloadedState: initialState
	})
}