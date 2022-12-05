const router = require('express').Router();
const Brand = require('../models/Brand');

// * CREATE BRAND
router.post('/', async (req, res) => {
    const newBrand = new Brand(req.body);
    try {
        const savedBrand = await newBrand.save();
        res.status(200).json(savedBrand);
    } catch (error) {
        res.status(500).json(error);
    }
});

// * UPDATE BRAND
router.put('/:id', async (req, res) => {
    try {
        const updateBrand = await Brand.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true },
        );
        res.status(200).json(updateBrand);
    } catch (error) {
        res.status(500).json(error);
    }
});

// * DELETE BRAND
router.delete('/:id', async (req, res) => {
    try {
        await Brand.findByIdAndDelete(req.params.id);
        res.status(200).json('Brand has been deleted');
    } catch (error) {
        res.status(500).json(error);
    }
});

// router.get('/', async (req, res) => {
//     try {
//         let brands = await Brand.find().populate('products');
//         res.status(200).json(brands);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

router.get('/', async (req, res) => {
    try {
        let foundBrands = await Brand.find();
        res.status(200).json(foundBrands);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
