import { render } from "react-dom"
import App from "./app/App"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "shared/context"
import { ErrorBoundary } from "app/providers/errorBoundary"

import "shared/config/i18n/i18n"
import { StoreProvider } from "app/providers/storeProvider"

render(
	<StoreProvider>
		<BrowserRouter>
			<ErrorBoundary>
				<ThemeProvider>
					<App/>
				</ThemeProvider>
			</ErrorBoundary>
		</BrowserRouter>
	</StoreProvider>,
	document.getElementById("root")
)
