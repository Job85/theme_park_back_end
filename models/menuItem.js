const { Schema } = require('mongoose')

const MenuItem = new Schema(
    {
        item: { type: String, required: true },
        price: { type: Number, required: true },
        key: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = MenuItem