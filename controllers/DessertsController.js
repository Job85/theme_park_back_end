const db = require('../db')
const { MenuItem } = require('../models')
const getDesserts = async (req, res) => {
    let gotDesserts = await MenuItem.find({ key: 'r1' })
    console.log('gotDesserts')
    res.send(gotDesserts)
}


module.exports = {
    getDesserts
}