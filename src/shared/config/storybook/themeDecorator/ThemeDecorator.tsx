import { Story } from "@storybook/react"
import { Theme, ThemeProvider } from "shared/context"

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {

	return (
		<ThemeProvider>
			<div className={`app ${theme}`}>
				<StoryComponent/>
			</div>
		</ThemeProvider>
	)
}
