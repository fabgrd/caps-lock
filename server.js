const express = require('express')
const app = express()
const fs = require('fs');

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/reunion', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Afrique/Reunion/reunion.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/ain', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('France/Auvergne-Rhones-Alpes/01/ain.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/aisne', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('France/aisne.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/07102021.2152', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('France/Auvergne-Rhones-Alpes/01/tanguy-morvan.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/page', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('page.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.listen(3000)
