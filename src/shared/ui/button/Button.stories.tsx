import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Button, ThemeButton } from "./Button"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/ThemeDecorator"
import { Theme } from "shared/context"

export default {
	title: "shared/Button",
	component: Button,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
	children: "Text"
}

export const Clear = Template.bind({})
Clear.args = {
	children: "Text",
	theme: ThemeButton.CLEAR
}

export const Outline = Template.bind({})
Outline.args = {
	children: "Text",
	theme: ThemeButton.OUTLINE
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
	children: "Text",
	theme: ThemeButton.OUTLINE
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]