import React, { useEffect, useState } from "react"
// import { Typography, Grid, Container } from "@material-ui/core"
import Header from "../representational/Header"
import WordList from "../representational/WordList"
import { makeStyles } from "@material-ui/core/styles"
import AddWord from "../representational/AddWord"

const useStyles = makeStyles((theme) => ({
	homepage: {
		// backgroundColor: theme.palette.primary.main,
		position: "relative",
		minHeight: "100vh",
	},
	add: {
		position: "fixed",
		bottom: "10vh",
		right: "5vw",
		backgroundColor: theme.palette.primary,
	},
}))

const Homepage = () => {
	const classes = useStyles()

	const [wordArray, setWordArray] = useState([])
	const [wordList, setWordList] = useState([])
	const [flag, setFlag] = useState(false)
	const [term, setTerm] = useState("")

	useEffect(() => {
		const fetchWords = async () => {
			const data = await fetch(`${process.env.REACT_APP_API_URL}/getAllWords`, {
				method: "GET",
			}).then((res) => res.json())

			setWordArray(data)
			setFlag(false)
		}
		fetchWords()
	}, [flag])

	useEffect(() => {
		if (!term) {
			setWordList(wordArray)
		} else {
			const wordArr = wordArray.filter((word) => word.text.includes(term))
			setWordList(wordArr)
		}
	}, [term, wordArray, wordList])

	return (
		<div className={classes.homepage}>
			<Header handleTerm={(term) => setTerm(term)} />
			<WordList wordArray={wordList} />
			<div className={classes.add}>
				<AddWord handleReload={(flag) => setFlag(flag)} />
			</div>
		</div>
	)
}

export default Homepage
