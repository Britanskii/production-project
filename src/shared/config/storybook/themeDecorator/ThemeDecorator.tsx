import { Story } from "@storybook/react"
import { Theme } from "shared/context"

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {

	return (
		<div className={`app ${theme}`}>
			<StoryComponent/>
		</div>
	)
}
