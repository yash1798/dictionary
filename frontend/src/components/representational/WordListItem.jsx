import React, { useState } from "react"

import { Typography, Container, Paper, makeStyles } from "@material-ui/core"

import WordPage from "../pages/WordPage"

//Styling the components using hook
const useStyles = makeStyles({
	lexicalTerm: {
		fontStyle: "italic",
		color: "grey",
		fontSize: "1rem",
		marginTop: "1rem",
	},
	paper: {
		padding: "1.5rem 0",
		cursor: "pointer",
	},
	text: {
		fontWeight: "700",
	},
})

const WordListItem = ({ word }) => {
	const classes = useStyles()
	//Initializing the classes

	const [open, setOpen] = useState(false)

	//Handles the Word page dialogue visibility
	const handleOpen = () => {
		setOpen(true)
	}

	return (
		<>
			<Paper onClick={handleOpen} elevation={2} className={classes.paper}>
				<Container maxWidth="md">
					<Typography variant="h4" className={classes.text}>
						{word.text}
					</Typography>
					{/* mapping through the response array from the backend to show the info */}
					{word.entries.map((entry) => (
						<>
							<Typography variant="h6" className={classes.lexicalTerm}>
								({entry.lexicalCategory})
							</Typography>
							<Typography variant="h5">{entry.definitions[0]}</Typography>
						</>
					))}
				</Container>
			</Paper>
			{/* The word page that shows more info about the word */}
			<WordPage handleClose={(open) => setOpen(open)} open={open} word={word} />
		</>
	)
}

export default WordListItem
