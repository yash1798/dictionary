import React, { useState, useEffect } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import InputBase from "@material-ui/core/InputBase"
import { fade, makeStyles } from "@material-ui/core/styles"
import SearchIcon from "@material-ui/icons/Search"
import { Container } from "@material-ui/core"

//Styling the components using hook
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: "20%",
		[theme.breakpoints.down("sm")]: {
			marginLeft: theme.spacing(1),
			width: "50%",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}))

export default function SearchAppBar({ handleTerm }) {
	const classes = useStyles()
	//Initializing the classes

	const [term, setTerm] = useState("")

	//Getting the term through prop tunneling
	useEffect(() => {
		handleTerm(term)
	}, [term, handleTerm])

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Container maxWidth="md">
					<Toolbar>
						<Typography className={classes.title} variant="h5" noWrap>
							Vocabulary
						</Typography>
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Search…"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
								onChange={(e) => setTerm(e.target.value.toLowerCase())}
							/>
						</div>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	)
}
