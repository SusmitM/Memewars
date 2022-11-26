const path= require('path');
const express = require('express')
const cors = require('cors');
const app = express()

const Port= process.env.PORT || 2020

app.use(cors());

app.use('/', express.static(__dirname + '/src'))

app.listen(Port, () => {
  console.log(`Server started on http://localhost:${Port}`)
})