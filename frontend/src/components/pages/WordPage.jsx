import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Dialog from "@material-ui/core/Dialog"
import Divider from "@material-ui/core/Divider"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import CloseIcon from "@material-ui/icons/Close"
import Bullets from "@material-ui/icons/Brightness1"
import Slide from "@material-ui/core/Slide"
import { Container, Grid } from "@material-ui/core"

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

	return (
		<Dialog fullScreen open={open} TransitionComponent={Transition}>
			<AppBar className={classes.appBar}>
				<Container>
					<Toolbar>
						<Typography variant="h5" className={classes.title}>
							{word.text}
						</Typography>
						<IconButton edge="start" color="inherit" aria-label="close">
							<CloseIcon onClick={() => handleClose(false)} />
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
