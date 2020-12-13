const express = require("express")
const { getAllWords, getWord } = require("../controllers/getWordController")

const router = express.Router()

router.get("/getAllWords", getAllWords)

module.exports = router
