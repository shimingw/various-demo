const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const path =require('path')

app.get('/', (req, res) => {
    const html = fs.readFileSync('../fetch/1.html')
    res.sendFile(path.join(__dirname,'../fetch/1.html'))
})
app.get('/hello', (req, res) => {
    res.send('hello')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))