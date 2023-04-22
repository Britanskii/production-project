import { Story } from "@storybook/react"
import { StoreProvider } from "app/providers/storeProvider"

export const ProviderDecorator = (StoryComponent: Story) => {

	return (
		<StoreProvider>
			<StoryComponent/>
		</StoreProvider>
	)
}
