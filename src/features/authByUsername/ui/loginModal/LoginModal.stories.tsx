import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { LoginModal } from "./LoginModal"

export default {
	title: "features/LoginModal",
	component: LoginModal,
} as ComponentMeta<typeof LoginModal>

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />

export const Default = Template.bind({})
Default.args = {
	isOpen: true
}
