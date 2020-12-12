const express = require("express")
const { addWord } = require("../controllers/addWordController")

const router = express.Router()

router.post("/addWord", addWord)

module.exports = router
