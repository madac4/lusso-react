const router = require('express').Router();
const Category = require('../models/Category');

// * CREATE CATEGORY
router.post('/', async (req, res) => {
    const newCategory = new Category(req.body);
    try {
        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory);
    } catch (error) {
        res.status(500).json(error);
    }
});

// * UPDATE CATEGORY
router.put('/:id', async (req, res) => {
    try {
        const updateCategory = await Category.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true },
        );
        res.status(200).json(updateCategory);
    } catch (error) {
        res.status(500).json(error);
    }
});

// * DELETE CATEGORY
router.delete('/:id', async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.status(200).json('Category has been deleted');
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
        let foundCategory = await Category.find().populate('subcategories').populate('brands');
        res.status(200).json(foundCategory);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
