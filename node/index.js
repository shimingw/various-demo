const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const path =require('path')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    // const html = fs.readFileSync('../fetch/1.html')
    res.sendFile(path.join(__dirname,'../fetch/1.html'))
})
app.get('/helloget', (req, res) => {
    console.log('get-body',req.body);
    console.log('get-query',req.query);
    res.send({name:123})
})
app.post('/hellopost', (req, res) => {
    console.log('post-body',req.body);
    console.log('post-query',req.query);
    res.send('hellopost')
})
app.post('/html', (req, res) => {
    const html = fs.readFileSync(path.join(__dirname,'../fetch/1.html'))
    res.send(html)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))