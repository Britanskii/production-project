import { configureStore, DeepPartial, ReducersMapObject } from "@reduxjs/toolkit"
import { counterReducer } from "entities/counter"
import { StateSchema } from "./StateSchema"
import { userReducer } from "entities/user"
import { createReducerManager } from "./createReducerManager"

export const createReduxStore = (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>
) => {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer
	}

	const reducerManager = createReducerManager(rootReducers)

	const store = configureStore<StateSchema>({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState
	})

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	store.reducerManager = reducerManager

	return store
}
