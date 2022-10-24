const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        brands: { type: Array },
        subcategories: { type: Array },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Category', CategorySchema);
