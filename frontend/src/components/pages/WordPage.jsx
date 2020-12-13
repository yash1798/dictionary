import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
	Dialog,
	Divider,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Slide,
	Container,
	Grid,
} from "@material-ui/core"
import { Close } from "@material-ui/icons"
import Bullets from "@material-ui/icons/Brightness1"

//Styling the components using hook
const useStyles = makeStyles((theme) => ({
	appBar: {
		position: "relative",
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
	},
	lexical: {
		fontStyle: "italic",
		color: "grey",
		fontSize: "1.5rem",
		margin: "2rem 0",
	},
}))

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />
})

export default function FullScreenDialog({ open, handleClose, word }) {
	const classes = useStyles()
	//Initializing the classes

	return (
		// This is basically a dialogue which will open when clicked
		<Dialog fullScreen open={open} TransitionComponent={Transition}>
			<AppBar className={classes.appBar}>
				<Container>
					<Toolbar>
						<Typography variant="h5" className={classes.title}>
							{word.text}
						</Typography>
						<IconButton edge="start" color="inherit" aria-label="close">
							<Close onClick={() => handleClose(false)} />
						</IconButton>
					</Toolbar>
				</Container>
			</AppBar>
			<Container>
				{word.entries.map((entry) => (
					<Grid container direction="column" spacing={5}>
						<Grid item>
							<Typography className={classes.lexical}>
								({entry.lexicalCategory})
							</Typography>
							<Grid container item direction="column" spacing={5}>
								{entry.definitions.map((definition) => (
									<Grid item>
										<Typography variant="h5">
											<Bullets style={{ fontSize: 10 }} /> {definition}
										</Typography>
									</Grid>
								))}
							</Grid>
						</Grid>
						<Divider />
					</Grid>
				))}
			</Container>
		</Dialog>
	)
}
