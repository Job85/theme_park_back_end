const { Schema } = require('mongoose')

const Restaurant = new Schema(
    {
        name: { type: String, required: true },
        cuisine: { type: String, required: true },
        menuItem_id: [{ type: Schema.Types.ObjectId, ref: 'menuItem_id' }]
    },
    { timestamps: true }
)

module.exports = Restaurant