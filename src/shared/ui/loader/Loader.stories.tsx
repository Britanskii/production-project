import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Loader } from "shared/ui"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/ThemeDecorator"
import { Theme } from "shared/context"


export default {
	title: "shared/Loader",
	component: Loader,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
