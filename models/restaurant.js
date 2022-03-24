const { Schema } = require('mongoose')

const Restaurant = new Schema(
    {
        name: { type: String, required: true },
        cuisine: { type: String, required: true },
        menuItems: [{ type: Schema.Types.ObjectId, ref: 'menuItems' }]
    },
    { timestamps: true }
)

module.exports = Restaurant