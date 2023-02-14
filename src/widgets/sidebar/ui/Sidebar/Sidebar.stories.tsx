import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Sidebar } from "widgets/sidebar"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/ThemeDecorator"
import { Theme } from "shared/context"


export default {
	title: "widgets/Sidebar",
	component: Sidebar,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
