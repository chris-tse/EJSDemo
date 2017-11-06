const express = require('express')
const app = express()

const port = process.env.port || 80

app.set('view engine', 'ejs')

app.use('/assets', express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/hentai/:thing', (req, res) => {
    let thing = req.params.thing
    res.render('hentai', {kink: thing})
})

app.get('/posts', (req, res) => {
    let posts = [
        {title: 'Hello World!', author: 'Chris'},
        {title: 'My first post', author: 'Chris'},
        {title: 'Guest writer?!', author: 'Jack'}
    ]

    res.render('posts', {posts})
})

app.listen(port, () => {
    console.log('Server starting...')
})