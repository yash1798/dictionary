const asyncHandler = require("express-async-handler")

const Word = require("../models/WordModel")

exports.getAllWords = asyncHandler(async (req, res) => {
	const { search } = req.query
	if (!search) {
		var wordsArray = await Word.find()
	} else {
		wordsArray = await Word.find({
			text: { $regex: `${search}`, $options: "i" },
		}) //getting all the words from the database
	}
	res.json(wordsArray) //serving the words
})
