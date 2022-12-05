const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        instagram: { type: String, required: true, unique: true },
        instagramUrl: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        images: { type: Array, required: true },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Client', ClientSchema);
