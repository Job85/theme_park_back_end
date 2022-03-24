const { Schema } = require('mongoose')

const MenuItems = new Schema(
    {
        menu_item: { type: String, required: true },
        price: { type: Number, required: true },
        description: [{ type: Schema.Types.ObjectId, ref: 'tasks' }]
    },
    { timestamps: true }
)

module.exports = MenuItems