import { Story } from "@storybook/react"
import { Theme } from "shared/context"

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {

	return (
		<div className={`app ${theme}`}>
			<StoryComponent/>
		</div>
	)
}
