import "./styles/index.sass"

import { classNames } from "shared/lib/classNames/classNames"
import { AppRouter } from "app/providers/router"
import { Navbar } from "widgets/navbar"
import { Sidebar } from "widgets/sidebar"
import { Suspense } from "react"

const App = () => {

	return (
		<div className={classNames(["app"])}>
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
