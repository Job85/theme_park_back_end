const getMenuItems = (req, res) => {
    res.send({
        message: 'Grabbing Menu'
    })
}

module.exports = {
    getMenuItems
}