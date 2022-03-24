const { Schema } = require('mongoose')

const Restaurant = new Schema(
    {
        name: { type: String, required: true },
        cuisine: { type: String, required: true },
        restaurant_id: [{ type: Schema.Types.ObjectId, ref: 'restaurant_id' }]
    },
    { timestamps: true }
)

module.exports = Restaurant