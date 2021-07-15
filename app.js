const express = require('express')
const hbs = require('hbs')
const path = require('path')

const home = require('./views/content/home')
const { server } = require('./config')

const app = express()
const port = server.port
const host = server.host

app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname, '/views/partials'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('home', home)
})

app.get('/generic', (req, res) => {
  res.render('generic')
})

// app.get('/generic', (req, res) => {
//   res.sendFile(path.join(__dirname, '/public/generic.html'))
// })

app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Mateo',
    age: 1,
    title: "The Mateo's site"
  })
})

// app.get('/elements', (req, res) => {
//   res.sendFile(path.join(__dirname, '/public/elements.html'))
// })

app.get('*', (req, res) => {
  res.send('404 | Not Found')
})

app.listen(port, host, () => {
  console.log(`Server running at ${host}:${port}`)
})
