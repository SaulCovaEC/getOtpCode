const express = require('express')
const otplib = require("otplib");
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Send secret key on URL')
})

app.get('/:secretKey', (req, res) => {
  const secret = req.params.secretKey
  res.send(otplib.authenticator.generate(secret))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})