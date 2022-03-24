const { model } = require('mongoose')
const RestaurantSchema = require('./restaurant')
const MenuItemsSchema = require('./menu_items')

const MenuItems = model('users', MenuItemsSchema)
const Restaurant = model('tasks', RestaurantSchema)

module.exports = {
    MenuItems,
    Restaurant
}