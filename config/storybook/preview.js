import { StyleDecorator } from "../../src/shared/config/storybook/styleDecorator/StyleDecorator"
import { addDecorator } from "@storybook/react"
import { ThemeDecorator } from "../../src/shared/config/storybook/themeDecorator/ThemeDecorator"
import { Theme } from "../../src/shared/context"
import { RouterDecorator } from "../../src/shared/config/storybook/routerDecorator/RouterDecorator"

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator)
