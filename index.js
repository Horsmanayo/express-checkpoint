const express = require('express')
const app = express()
// const requestTime = require('./Middleware/request')

const requestTime = (req, res, next) => {
    let day = new Date().getDay()
    let time = new Date().getHours()

    if(time > 8 && time < 17 && day !== 0 && day !== 6) next()

    else {
        res.render('unavailable')
    }
    next()
}

// app.use(requestTime)
app.use(express.static('public'))
app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/home', (req, res) => {
    res.render('index')
})

app.get('/services', (req, res) => {
    res.render('services')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.listen(4444, () => {
    console.log('app is listening on port: 4444')
})