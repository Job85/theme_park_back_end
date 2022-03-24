const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const PORT = process.env.PORT || 3001
const db = require('./db')
const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

const menuController = require('./controllers/MenuController')
app.get('/menu', menuController.getMenu)
app.get('/rest', menuController.getRest)



app.listen(PORT, () => console.log(`Server running on ${PORT}`))