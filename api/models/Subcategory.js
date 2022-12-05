const mongoose = require('mongoose');

const SubcategorySchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        brands: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Brand' }],
    },
    { timestamps: true },
);

module.exports = mongoose.model('Subcategory', SubcategorySchema);
