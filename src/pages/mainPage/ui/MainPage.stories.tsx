import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/ThemeDecorator"
import { Theme } from "shared/context"
import MainPage from "pages/mainPage/ui/MainPage"
import { ProviderDecorator } from "shared/config/storybook/providerDecorator/providerDecorator"


export default {
	title: "pages/MainPage",
	component: MainPage,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />

export const Light = Template.bind({})
Light.decorators = [ProviderDecorator]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), ProviderDecorator]
