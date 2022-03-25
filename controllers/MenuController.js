const db = require('../db')
const { MenuItem, Restaurant } = require('../models')
const getMenu = async (req, res) => {
    let gotMenu = await MenuItem.find({})
    console.log('gotMenu')
    res.send(gotMenu)
}

const getRest = async (req, res) => {
    let gotRest = await Restaurant.find({}).populate()
    console.log('gotRest')
    res.send(gotRest)
}


module.exports = {
    getMenu,
    getRest
}