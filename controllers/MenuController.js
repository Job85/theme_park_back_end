const getMenu = (req, res) => {
    res.send({
        message: 'Grabbing Menu'
    })
}

module.exports = {
    getMenu
}