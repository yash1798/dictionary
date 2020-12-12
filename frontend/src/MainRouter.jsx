import React from "react"

import { BrowserRouter, Route, Switch } from "react-router-dom"
import Homepage from "./components/pages/Homepage"

// const HomePage = lazy(() => import("./components/pages/HomePage"))

const MainRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Homepage} />
			</Switch>
		</BrowserRouter>
	)
}

export default MainRouter
