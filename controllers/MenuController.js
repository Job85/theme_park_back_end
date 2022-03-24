// const db = require('./db')
const { Restaurant } = require('../models')
const getMenu = (req, res) => {
    let gotMenu = Restaurant.find({
        name: 'Grandma\'s Fried Goodies',
        cuisine: 'Fried Desserts',
        key: ''
    })
    console.log('gotMenu')
    return gotMenu
}



module.exports = {
    getMenu
}