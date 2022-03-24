const { Schema } = require('mongoose')

const Restaurant = new Schema(
    {
        name: { type: String, required: true },
        cuisine: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = Restaurant