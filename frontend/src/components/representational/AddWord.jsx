import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
// import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import IconButton from "@material-ui/core/IconButton"
import Add from "@material-ui/icons/Add"

export default function AddWord({ handleReload }) {
	const [open, setOpen] = React.useState(false)

	const [word, setWord] = useState("")

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleSubmit = async () => {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/addWord`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({ text: word }),
		}).then((res) => res.json())

		if (data.status === "success") {
			setOpen(false)
			handleReload(true)
		}
	}

	return (
		<div>
			<IconButton color="primary" onClick={handleClickOpen}>
				<Add />
			</IconButton>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle id="form-dialog-title">Add a new Word</DialogTitle>
				<DialogContent>
					{/* <DialogContentText></DialogContentText> */}
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
		</div>
	)
}
