import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { User } from "./User"

export default {
	title: "entities/User",
	component: User,
} as ComponentMeta<typeof User>

const Template: ComponentStory<typeof User> = (args) => <User {...args} />

export const Default = Template.bind({})
