import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { AppLink } from "shared/ui"
import { AppLinkTheme } from "shared/ui/appLink/AppLink"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/ThemeDecorator"
import { Theme } from "shared/context"


export default {
	title: "shared/AppLink",
	component: AppLink,
	argTypes: {
		backgroundColor: { control: "color" },
	},
	args: {
		to: "/",
		children: "Text"
	}
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = { theme: AppLinkTheme.PRIMARY }

export const Secondary = Template.bind({})
Secondary.args =  { theme: AppLinkTheme.SECONDARY }

export const PrimaryDark = Template.bind({})
PrimaryDark.args = { theme: AppLinkTheme.PRIMARY }
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark = Template.bind({})
SecondaryDark.args =  { theme: AppLinkTheme.SECONDARY }
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
