const db = require('../db')
// const Chance = require('chance')
const { Restaurant, MenuItems } = require('../models')

// const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
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
}

const run = async () => {
    const tasks = await createRestaurant()
    await createRestaurantWithTasks(rest)
    db.close()
}

run()