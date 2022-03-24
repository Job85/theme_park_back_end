const mongoose = require('mongoose')
const MenuItemSchema = require('./menuItem')
const RestaurantSchema = require('./restaurant')

const MenuItem = mongoose.model('menuItems', MenuItemSchema)
const Restaurant = mongoose.model('restaurants', RestaurantSchema)

module.exports = {
    MenuItem,
    Restaurant
}