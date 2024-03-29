import { ReactNode } from "react"
import { I18nextProvider } from "react-i18next"
import { render } from "@testing-library/react"
import i18nForTests from "../../config/i18n/i18nForTests"
import { MemoryRouter } from "react-router-dom"
import { StateSchema, StoreProvider } from "app/providers/storeProvider"
import { DeepPartial } from "@reduxjs/toolkit"

export interface ComponentRenderOptions {
	route?: string
	initialValue?: DeepPartial<StateSchema>
}

export const componentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
	const { initialValue,  route = "" } = options

	return render(
		<StoreProvider initialState={initialValue}>
			<MemoryRouter initialEntries={[route]}>
				<I18nextProvider i18n={i18nForTests}>
					{component}
				</I18nextProvider>
			</MemoryRouter>
		</StoreProvider>
	)
}
