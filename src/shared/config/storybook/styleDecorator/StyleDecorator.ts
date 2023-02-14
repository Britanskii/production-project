import "app/styles/index.sass"
import "./global.sass"
import { Story } from "@storybook/react"

export const StyleDecorator = (story: () => Story) => story()
