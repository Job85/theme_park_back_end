const { Schema } = require('mongoose')

const Restaurant = new Schema(
    {
        name: { type: String, required: true },
        cuisine: { type: String, required: true },
        key: [{ type: Schema.Types.ObjectId, ref: 'key' }]
    },
    { timestamps: true }
)

module.exports = Restaurant