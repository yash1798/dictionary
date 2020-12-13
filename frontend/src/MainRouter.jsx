import React from "react"

import { BrowserRouter, Route, Switch } from "react-router-dom"
import Homepage from "./components/pages/Homepage"

const MainRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Homepage} />
			</Switch>
		</BrowserRouter>
	)
}

export default MainRouter
