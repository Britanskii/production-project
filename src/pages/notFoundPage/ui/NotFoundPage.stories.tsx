import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/ThemeDecorator"
import { Theme } from "shared/context"
import { NotFoundPage } from "./NotFoundPage"


export default {
	title: "pages/NotFoundPage",
	component: NotFoundPage,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
