const router = require('express').Router();
const Advantage = require('../models/Advantages');

// * CREATE ADVANTAGE
router.post('/', async (req, res) => {
    const newAdvantage = new Advantage(req.body);
    try {
        const savedAdvantage = await newAdvantage.save();
        res.status(200).json(savedAdvantage);
    } catch (error) {
        res.status(500).json(error);
    }
});

// // * UPDATE PRODUCT
// router.put('/:id', async (req, res) => {
//     try {
//         const updateProduct = await Product.findByIdAndUpdate(
//             req.params.id,
//             {
//                 $set: req.body,
//             },
//             { new: true },
//         );
//         res.status(200).json(updateProduct);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// * DELETE ADVANTAGE
router.delete('/:id', async (req, res) => {
    try {
        await Advantage.findByIdAndDelete(req.params.id);
        res.status(200).json('Advantage has been deleted');
    } catch (error) {
        res.status(500).json(error);
    }
});

// * GET ALL ADVANTAGES
router.get('/', async (req, res) => {
    try {
        let advantages = await Advantage.find();
        res.status(200).json(advantages);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
