const mongoose = require('mongoose');

const AdvantageSchema = new mongoose.Schema(
    {
        icon: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Advantage', AdvantageSchema);
