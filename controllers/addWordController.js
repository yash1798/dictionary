const asyncHandler = require("express-async-handler")
const fetch = require("node-fetch")

const AppError = require("../utils/errorHandler")
const Word = require("../models/WordModel")

exports.addWord = asyncHandler(async (req, res) => {
	let { text } = req.body //Getting the text from body

	text = text.toLowerCase()

	let word = await Word.findOne({ text }) //finding the word

	if (word) {
		throw new AppError(400, "World Already Exists.") //throwing an error if the word is already in the database
	} else {
		const data = await fetch(
			//fetching the word from the Oxford Api
			`${process.env.OXFORD_API_URL}/${text}?fields=definitions`,
			{
				method: "GET",
				headers: {
					Accept: "application/json",
					app_key: `${process.env.APP_KEY}`,
					app_id: `${process.env.APP_ID}`,
					"Content-Type": "application/json",
				},
			}
		)
			.then((res) => res.json())
			.then(
				(response) => response.results[0].lexicalEntries //Getting the word info if successfull
			)
			.catch(() => {
				throw new AppError(404, "World Not Found.") //Throwing an error if there is no word
			})

		word = {
			text,
			language: "eng-gb",
			entries: [],
		}

		//Extracting the valuable info from the response by running loops
		data.forEach((entry) => {
			let a = {
				lexicalCategory: entry.lexicalCategory.id,
				definitions: [],
			}
			entry.entries.forEach((x) => {
				x.senses.forEach((sense) => {
					a.definitions.push(sense.definitions[0])
				})
			})
			word.entries.push(a)
		})
		const response = await Word.create(word)
		res.json({ status: "success", payload: response }) //sending the response
	}
})
