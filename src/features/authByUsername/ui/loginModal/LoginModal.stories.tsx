import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { LoginModal } from "./LoginModal"
import { StoreDecorator } from "shared/config/storybook/storeDecorator/StoreDecorator"

export default {
	title: "features/LoginModal",
	component: LoginModal,
} as ComponentMeta<typeof LoginModal>

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />

export const Default = Template.bind({})
Default.args = {
	isOpen: true
}
Default.decorators = [StoreDecorator()]

export const Error = Template.bind({})
Error.args = {
	isOpen: true
}
Error.decorators = [StoreDecorator({
	login: { error: "Error" }
})]

export const Loading = Template.bind({})
Loading.args = {
	isOpen: true
}
Loading.decorators = [StoreDecorator( {
	login: { isLoading: true }
})]

