import React, { useState } from "react"
import {
	Button,
	TextField,
	Dialog,
	DialogActions,
	DialogContentText,
	DialogContent,
	DialogTitle,
	IconButton,
} from "@material-ui/core"

import { Add } from "@material-ui/icons"

export default function AddWord({ handleReload }) {
	const [open, setOpen] = React.useState(false)

	const [word, setWord] = useState("")
	const [error, setError] = useState("")

	//Handles the add word dialogue
	const handleOpen = () => {
		setOpen(true)
	}

	//Handles the add word dialogue
	const handleClose = () => {
		setOpen(false)
		setError("")
	}

	//action when you have asked to add a word
	const handleSubmit = async () => {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/addWord`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({ text: word }),
		}).then((res) => res.json())

		//checking the response
		if (data.status === "success") {
			setOpen(false)
			handleReload(true)
		} else if (data.status === "fail") {
			setError(data.payload)
			setTimeout(() => {
				setError("")
			}, 5000)
		}
	}

	return (
		<>
			<IconButton
				color="primary"
				onClick={handleOpen}
				style={{ backgroundColor: "#720D5d" }}
			>
				<Add fontSize="large" style={{ color: "white" }} />
			</IconButton>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle id="form-dialog-title">Add a new Word</DialogTitle>
				<DialogContent>
					<DialogContentText style={{ color: "#E30425" }}>
						{error}
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="word"
						label="Word"
						type="text"
						fullWidth
						onChange={(e) => setWord(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleSubmit} color="primary">
						Add
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}
