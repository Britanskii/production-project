import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Text } from "./Text"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/ThemeDecorator"
import { Theme } from "shared/context"

export default {
	title: "shared/Text",
	component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
	title: "Title lorem",
	text: "Text lorem"
}

export const Error = Template.bind({})
Error.args = {
	title: "Title lorem",
	text: "Text lorem",
	theme: "error"
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
	title: "Title lorem"
}

export const OnlyText = Template.bind({})
OnlyText.args = {
	text: "Text lorem"
}

export const DefaultDark = Template.bind({})
DefaultDark.args = {
	title: "Title lorem",
	text: "Text lorem"
}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
	title: "Title lorem"
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
	text: "Text lorem"
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

