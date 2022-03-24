const db = require('../db')
// const Chance = require('chance')
const { Restaurant, MenuItems } = require('../models')

// const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createRestaurant = async () => {
    const desserts = await MenuItems.find({ key: 'r1' })
    const dinner = await MenuItems.find({ key: 'r2' })
    const restaurants = [
        {
            name: 'Grandma\'s Fried Goodies',
            cuisine: 'Fried Desserts',
            key: desserts
        },
        {
            name: 'All American Grill',
            cuisine: 'Grill & BBQ',
            key: dinner
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