const { model } = require('mongoose')
const RestaurantSchema = require('./models/restaurant')
const MenuItemSchema = require('./models/menu_item')
const menuController = require('./controllers/MenuController')
const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const PORT = process.env.PORT || 3001
const app = express()
// const app = getMenu()

const MenuItem = model('menu', MenuItemSchema)
const Restaurant = model('rest', RestaurantSchema)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.get('/menu', menuController.getMenu)


app.listen(PORT, () => console.log(`Server running on ${PORT}`))
module.exports = {
    MenuItem,
    Restaurant,
}