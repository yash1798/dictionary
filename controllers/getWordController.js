const asyncHandler = require("express-async-handler")

const AppError = require("../utils/errorHandler")
const Word = require("../models/WordModel")

exports.getAllWords = asyncHandler(async (req, res) => {
	let wordsArray = await Word.find() //getting all the words from the database

	res.json(wordsArray) //serving the words
})
