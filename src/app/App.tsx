import "./styles/index.sass"

import { classNames } from "shared/lib/classNames/classNames"
import { AppRouter } from "app/providers/router"
import { Navbar } from "widgets/navbar"
import { Sidebar } from "widgets/sidebar"
import { Suspense, useEffect } from "react"
import { useDispatch } from "react-redux"
import { userActions } from "entities/user"

const App = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(userActions.initAuthData)
	}, [])

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
