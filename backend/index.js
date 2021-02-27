
const express = require('express')
const PORT = process.env.PORT || 36677
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("bosy-parser")
const mongoose = require("mongoose")
const config = require("./config/db")
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
