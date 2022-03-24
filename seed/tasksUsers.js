const db = require('../db')
// const Chance = require('chance')
const { Restaurant, MenuItems } = require('../models')

// const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const run = async () => {
    const tasks = await createRestaurant()
    await createRestaurantWithTasks(tasks)
    db.close()
}

run()