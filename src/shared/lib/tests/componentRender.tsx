import { ReactNode } from "react"
import { I18nextProvider } from "react-i18next"
import { render } from "@testing-library/react"
import i18nForTests from "../../config/i18n/i18nForTests"
import { MemoryRouter } from "react-router-dom"

export interface ComponentRenderOptions {
	route?: string
}

export const componentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
	const { route = "" } = options

	return render(
		<MemoryRouter initialEntries={[route]}>
			<I18nextProvider i18n={i18nForTests}>
				{component}
			</I18nextProvider>
		</MemoryRouter>
	)
}
