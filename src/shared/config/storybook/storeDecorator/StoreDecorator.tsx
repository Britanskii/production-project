import { Story } from "@storybook/react"
import { StateSchema, StoreProvider } from "app/providers/storeProvider"
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit"
import { loginReducer } from "features/authByUsername/model/slice/loginSlice"

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	login: loginReducer
}

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateSchema> = {}, asyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {}) => (StoryComponent: Story) => {

	return (
		<StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
			<StoryComponent/>
		</StoreProvider>
	)
}

