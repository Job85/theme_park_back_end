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
const dinnerController = require('./controllers/DinnerController')
const dessertsController = require('./controllers/DessertsController')
app.get('/dinner', dinnerController.getDinner)
app.get('/desserts', dessertsController.getDesserts)
app.get('/menu', menuController.getMenu)
app.get('/rest', menuController.getRest)



app.listen(PORT, () => console.log(`Server running on ${PORT}`))