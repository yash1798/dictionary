const asyncHandler = require("express-async-handler")

const AppError = require("../utils/errorHandler")
const Word = require("../models/WordModel")

exports.getAllWords = asyncHandler(async (req, res) => {
	let wordsArray = await Word.find()

	res.json(wordsArray)
})

exports.getWord = asyncHandler(async (req, res) => {
	const { text } = req.query

	const word = await Word.findOne({ text })
	if (!word) {
		throw new AppError(404, "Word Not Found!")
	} else {
		res.json({ status: "success", payload: word })
	}
})
