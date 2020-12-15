import React, { useEffect, useState } from "react"

import Header from "../representational/Header"
import WordList from "../representational/WordList"
import { makeStyles } from "@material-ui/core/styles"
import AddWord from "../representational/AddWord"

//Styling the components using hook
const useStyles = makeStyles((theme) => ({
	homepage: {
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
	//Initializing the classes

	const [wordArray, setWordArray] = useState([])
	const [wordList, setWordList] = useState([])
	const [flag, setFlag] = useState(false)
	const [term, setTerm] = useState("")

	//Getting the array list stored in mongoDB database
	useEffect(() => {
		const fetchWords = async () => {
			const data = await fetch(`/api/getAllWords`, {
				method: "GET",
			}).then((res) => res.json())

			setWordArray(data)
			setFlag(false)
		}
		fetchWords()
	}, [flag])

	//filter the array based on the search term
	useEffect(() => {
		if (!term) {
			setWordList(wordArray)
		} else {
			const fetchWordList = async () => {
				const wordArr = await fetch(`/api/getAllWords?search=${term}`, {
					method: "GET",
				}).then((res) => res.json())

				setWordList(wordArr)
			}
			fetchWordList()
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
