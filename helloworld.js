const express = require('express')
const app = express()
const port = 3000

app.get('/helloworld', (req, res) => {
  res.send("getting started")
})

app.listen(port, () => {
  console.log(`gangadhar app listening on port ${port}`)
})
