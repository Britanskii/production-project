import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Modal } from "shared/ui/modal/Modal"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/ThemeDecorator"
import { Theme } from "shared/context"

export default {
	title: "shared/Modal",
	component: Modal,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
	isOpen: true,
	children: "Модальное Окно"
}

export const Dark = Template.bind({})
Dark.args = {
	isOpen: true,
	children: "Модальное Окно"
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
