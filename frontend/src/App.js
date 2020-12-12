import theme from "./theme"
import "./App.css"
import { ThemeProvider } from "@material-ui/styles"

import MainRouter from "./MainRouter"

function App() {
	return (
		<ThemeProvider theme={theme}>
			<MainRouter />
		</ThemeProvider>
	)
}

export default App
