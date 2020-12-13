import { ThemeProvider } from "@material-ui/styles"

import MainRouter from "./MainRouter"

import theme from "./theme"

function App() {
	return (
		<ThemeProvider theme={theme}>
			{/* Theme Provider from material */}
			<MainRouter />
			{/* Router in case i need to use routing */}
		</ThemeProvider>
	)
}

export default App
