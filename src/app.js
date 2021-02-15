const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDir = path.join(__dirname, '../public')
const viewsDir = path.join(__dirname,'../templates/views')
const partialDir = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location. default if not set the folder is views
app.set('view engine', 'hbs')
app.set('views', viewsDir)
hbs.registerPartials(partialDir)

// Setup static directory to serve
app.use(express.static(publicDir))

app.get('test', (req,res) => {
    res.send(__dirname)
})

app.get('', (req, res) => {
    res.render('index', {
        'title': 'Dashboard',
        'name': 'Awal Kharisma',
        'dirname': __dirname,
        'publicDir': publicDir
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        'title': 'Help Page',
        'name': 'Awal Kharisma'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        'title': 'About Page',
        'name': 'Awal Kharisma'
    })
})

app.get('/weather', (req, res) => {
    res.render('index', {
        'title': 'Weather Page',
        'name': 'Awal Kharisma'
    })
})

app.listen(3000, ()=>{
    console.log('Server is up on port 3000.')
})