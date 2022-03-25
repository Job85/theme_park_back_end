const db = require('../db')

const { Restaurant, MenuItem } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createRestaurant = async () => {
    const desserts = await MenuItem.find({ key: 'r1' })
    const dinner = await MenuItem.find({ key: 'r2' })
    console.log(desserts)
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