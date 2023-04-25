import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import  LoginForm  from "./LoginForm"
import { StoreDecorator } from "shared/config/storybook/storeDecorator/StoreDecorator"

export default {
	title: "features/LoginForm",
	component: LoginForm,
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [StoreDecorator()]
