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
	CircularProgress,
	Backdrop,
	makeStyles,
} from "@material-ui/core"

import { Add } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: "11 !important",
		color: "#fff",
	},
}))

export default function AddWord({ handleReload }) {
	const classes = useStyles()

	const [open, setOpen] = useState(false)

	const [word, setWord] = useState("")
	const [error, setError] = useState("")
	const [bd, setBD] = useState(false)

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
		setBD(true)

		const data = await fetch(`/api/addWord`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({ text: word }),
		}).then((res) => res.json())

		setBD(false)

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
				onClick={() => handleOpen()}
				style={{ backgroundColor: "#720D5d" }}
			>
				<Add fontSize="large" style={{ color: "white" }} />
			</IconButton>
			<Backdrop className={classes.backdrop} open={bd}>
				<CircularProgress color="inherit" />
			</Backdrop>
			<Dialog open={open} onClose={handleClose} style={{ position: "fixed" }}>
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
