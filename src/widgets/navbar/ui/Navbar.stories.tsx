import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Sidebar } from "widgets/sidebar"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/ThemeDecorator"
import { Theme } from "shared/context"
import { Navbar } from "widgets/navbar"
import { StoreDecorator } from "shared/config/storybook/storeDecorator/StoreDecorator"


export default {
	title: "widgets/Navbar",
	component: Navbar,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [StoreDecorator()]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator()]

export const Auth = Template.bind({})
Auth.args = {}
Auth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
	user: { authData : {} }
})]
