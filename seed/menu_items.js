const db = require('../db')
// const Chance = require('chance')
const { Restaurant, MenuItem } = require('../models')

// const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const menu_items = [
        {
            item: 'Fountain Drink',
            price: 2.50,
            restaurant_id: 75
        },
        {
            item: 'Juice',
            price: 2.50,
            restaurant_id: 75
        },
        {
            item: 'Hot Dog',
            price: 4.50,
            restaurant_id: 75
        },
        {
            item: 'Hamburger',
            price: 5.50,
            restaurant_id: 75
        },
        {
            item: 'Funnel Cake',
            price: 3.75,
            restaurant_id: 75
        },
        {
            item: 'Fried Oreo',
            price: 3.75,
            restaurant_id: 75
        },
        {
            item: 'Corn Dog',
            price: 4.75,
            restaurant_id: 75
        },
        {
            item: 'Kettle Corn',
            price: 3.00,
            restaurant_id: 75
        },
        {
            item: 'Turkey Leg',
            price: 5.75,
            restaurant_id: 75
        },
        {
            item: 'Fried Ice Cream',
            price: 3.75,
            restaurant_id: 75
        },
        {
            item: 'Street Corn',
            price: 3.75,
            restaurant_id: 75
        },
        {
            item: 'Fired Cheese Bites',
            price: 4.00,
            restaurant_id: 75
        },
        {
            item: 'Loaded Fries',
            price: 5.00,
            restaurant_id: 75
        },
        {
            item: 'Ribs',
            price: 6.00,
            restaurant_id: 75
        },
        {
            item: 'Lemonade',
            price: 4.00,
            restaurant_id: 75
        },
        {
            item: 'Fried Pickles',
            price: 3.75,
            restaurant_id: 75
        },
        {
            item: 'Beignets',
            price: 4.00,
            restaurant_id: 75
        },
    ]
}

const run = async () => {
    const tasks = await createMenuItem()
    await createMenuItemWithTasks(menu)
    db.close()
}

run()