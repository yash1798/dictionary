import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import WordListItem from "../representational/WordListItem"

//Styling the components using hook
const useStyles = makeStyles({
	root: {
		backgroundColor: "white",
		borderTopLeftRadius: "5rem",
		borderTopRightRadius: "5rem",
	},
})

const WordList = ({ wordArray }) => {
	const classes = useStyles()
	//Initializing the classes

	return (
		<div className={classes.root}>
			{/* mapping through the word array */}
			{wordArray.map((word) => (
				<>
					<WordListItem word={word} />
				</>
			))}
		</div>
	)
}

export default WordList
