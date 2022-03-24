const db = require('../db')
const { MenuItem } = require('../models')
const getMenu = async (req, res) => {
    let gotMenu = await MenuItem.find({})
    console.log('gotMenu')
    res.send(gotMenu)
}


module.exports = {
    getMenu
}