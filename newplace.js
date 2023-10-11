const express = require('express')
const app = express()
const port = 5000

app.get('/newplace', (req, res) => {
  res.send("welcome")
})

app.listen(port, () => {
  console.log(`abhi app listening on port ${port}`)
})
