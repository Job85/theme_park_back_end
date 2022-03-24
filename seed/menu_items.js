const db = require('../db')
const { MenuItem } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createRestaurant = async () => {
    const menu_items = [
        {
            item: 'Fountain Drink',
            price: 2.50,
            key: 'r2'
            // restaurant_id: 
        },
        {
            item: 'Juice',
            price: 2.50,
            key: 'r2'
            // restaurant_id: 
        },
        {
            item: 'Hot Dog',
            price: 4.50,
            key: 'r2'
            // restaurant_id: 
        },
        {
            item: 'Hamburger',
            price: 5.50,
            key: 'r2'
            // restaurant_id: 
        },
        {
            item: 'Funnel Cake',
            price: 3.75,
            key: 'r1'
            // restaurant_id: 
        },
        {
            item: 'Fried Oreo',
            price: 3.75,
            key: 'r1'
            // restaurant_id: 
        },
        {
            item: 'Corn Dog',
            price: 4.75,
            key: 'r2'
            // restaurant_id: 
        },
        {
            item: 'Kettle Corn',
            price: 3.00,
            key: 'r1'
            // restaurant_id: 
        },
        {
            item: 'Turkey Leg',
            price: 5.75,
            key: 'r2'
            // restaurant_id: 
        },
        {
            item: 'Fried Ice Cream',
            price: 3.75,
            key: 'r1'
            // restaurant_id: 
        },
        {
            item: 'Street Corn',
            price: 3.75,
            key: 'r2'
            // restaurant_id: 
        },
        {
            item: 'Fired Cheese Bites',
            price: 4.00,
            key: 'r2'
            // restaurant_id: 
        },
        {
            item: 'Loaded Fries',
            price: 5.00,
            key: 'r2'
            // restaurant_id: 
        },
        {
            item: 'Ribs',
            price: 6.00,
            key: 'r2'
            // restaurant_id: 
        },
        {
            item: 'Lemonade',
            price: 4.00,
            key: 'r2'
            // restaurant_id: 
        },
        {
            item: 'Fried Pickles',
            price: 3.75,
            key: 'r2'
            // restaurant_id: 
        },
        {
            item: 'Beignets',
            price: 4.00,
            key: 'r1'
            // restaurant_id: 
        },
    ]
    await MenuItem.insertMany(menu_items)
    console.log('Created menu items with')
}

const run = async () => {
    await createRestaurant()
    db.close()
}

run()