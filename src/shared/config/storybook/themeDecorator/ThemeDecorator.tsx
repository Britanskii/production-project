import { Story } from "@storybook/react"
import { Theme, ThemeProvider } from "shared/context"
import { useEffect } from "react"

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {

	useEffect(() => {
		document.body.classList.add(theme)

		return () => {
			document.body.classList.remove(theme)
		}
	}, [])

	return (
		<ThemeProvider>
			<div className={"app"}>
				<StoryComponent/>
			</div>
		</ThemeProvider>
	)
}
