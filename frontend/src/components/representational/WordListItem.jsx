import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import { Typography, Container } from "@material-ui/core"

import WordPage from "../pages/WordPage"

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

	const [open, setOpen] = useState(false)

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
			<WordPage handleClose={(open) => setOpen(open)} open={open} word={word} />
		</>
	)
}

export default WordListItem
