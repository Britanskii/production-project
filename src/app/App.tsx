import "./styles/index.sass"

import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "shared/context"
import { AppRouter } from "app/providers/router"
import { Navbar } from "widgets/navbar"
import { Sidebar } from "widgets/sidebar"
import { Suspense } from "react"

const App = () => {

	const { theme } = useTheme()

	return (
		<div className={classNames(["app", theme])}>
			<Suspense fallback={""}>
				<Navbar/>
				<div className="contentPage">
					<Sidebar/>
					<AppRouter/>
				</div>
			</Suspense>
		</div>
	)
}

export default App
