const { Schema } = require('mongoose')

const MenuItem = new Schema(
    {
        menu_item: { type: String, required: true },
        price: { type: Number, required: true },
    },
    { timestamps: true }
)

module.exports = MenuItem