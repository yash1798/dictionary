import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import WordListItem from "../representational/WordListItem"

const useStyles = makeStyles({
	root: {
		backgroundColor: "white",
		borderTopLeftRadius: "5rem",
		borderTopRightRadius: "5rem",
	},
})

const WordList = ({ wordArray }) => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			{wordArray.map((word) => (
				<WordListItem word={word} />
			))}
		</div>
	)
}

export default WordList
