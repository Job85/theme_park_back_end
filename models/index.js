const mongoose = require('mongoose')
const MenuItemSchema = require('./menu_item')
const RestaurantSchema = require('./restaurant')

const MenuItem = mongoose.model('MenuItem', MenuItemSchema)
const Restaurant = mongoose.model('Restaurant', RestaurantSchema)

module.exports = {
    MenuItem,
    Restaurant
}