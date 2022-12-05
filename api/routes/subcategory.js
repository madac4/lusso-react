const router = require('express').Router();
const Subcategory = require('../models/Subcategory');

// * CREATE SUBCATEGORY
router.post('/', async (req, res) => {
    const newSubcategory = new Subcategory(req.body);
    try {
        const savedSubcategory = await newSubcategory.save();
        res.status(200).json(savedSubcategory);
    } catch (error) {
        res.status(500).json(error);
    }
});

// * UPDATE SUBCATEGORY
router.put('/:id', async (req, res) => {
    try {
        const updateSubcategory = await Subcategory.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true },
        );
        res.status(200).json(updateSubcategory);
    } catch (error) {
        res.status(500).json(error);
    }
});

// * DELETE SUBCATEGORY
router.delete('/:id', async (req, res) => {
    try {
        await Subcategory.findByIdAndDelete(req.params.id);
        res.status(200).json('Subcategory has been deleted');
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

router.get('/find/:id', async (req, res) => {
    try {
        const subcategory = await Subcategory.findById(req.params.id).populate('brands');
        res.status(200).json(subcategory);
    } catch (error) {
        res.status(500).json(error);
    }
});
router.get('/', async (req, res) => {
    try {
        let foundSubcategory = await Subcategory.find().populate('brands');
        res.status(200).json(foundSubcategory);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
