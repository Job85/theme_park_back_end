const db = require('../db')
const { MenuItem } = require('../models')
const getDinner = async (req, res) => {
    let gotDinner = await MenuItem.find({ key: 'r2' })
    console.log('gotDinner')
    res.send(gotDinner)
}


module.exports = {
    getDinner
}