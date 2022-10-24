const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        images: { type: Array, required: true },
        // categories: [{ categoryId: { type: String } }],
        // brand: { brandId: { type: String } },
        categories: { type: Array, required: true },
        brand: { type: String },
        price: { type: Number, required: true },
        inStock: { type: Boolean, required: true, default: true },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Product', ProductSchema);
