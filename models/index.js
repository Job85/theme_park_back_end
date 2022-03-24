const { model } = require('mongoose')
const RestaurantSchema = require('./restaurant')
const MenuItemSchema = require('./menu_item')
const getMenuItems = require('../MenuControllers')
const express = require('express')

const PORT = process.env.PORT || 3001
const app = express()

const MenuItem = model('menu', MenuItemSchema)
const Restaurant = model('rest', RestaurantSchema)

app.listen(PORT, () => console.log(`Server running on ${PORT}`))

module.exports = {
    MenuItem,
    Restaurant,

}