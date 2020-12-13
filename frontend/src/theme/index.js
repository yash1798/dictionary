import { createMuiTheme } from "@material-ui/core/styles"

// Creating the theme

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#5D1049",
		},
		secondary: {
			main: "#E30425",
		},
		// Setting the colors of the application
	},
	typography: {
		fontFamily: "Kumbh Sans",
		// Setting Kumbh Sans font across the application
	},
})

export default theme
