const db = require('../db')
// const Chance = require('chance')
const { Restaurant, MenuItems } = require('../models')

// const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createRestaurant = async () => {
    const restaurants = [
        {
            name: 'Grandma\'s Fried Goodies',
            cuisine: 'Fried Desserts'
        },
        {
            name: 'All American Grill',
            cuisine: 'Grill & BBQ'
        },
    ]
    await Restaurant.insertMany(restaurants)
    console.log('Created restaurants')
}

const run = async () => {
    await createRestaurant()
    db.close()
}

run()