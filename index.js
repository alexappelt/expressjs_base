const express = require('express')
const app = express()
const port = 5000

app.get('/deploy', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
