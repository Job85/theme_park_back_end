const { model } = require('mongoose')
const RestaurantSchema = require('./restaurant')
const MenuItemsSchema = require('./menu_items')

const MenuItems = model('menu', MenuItemsSchema)
const Restaurant = model('rest', RestaurantSchema)

module.exports = {
    MenuItems,
    Restaurant
}