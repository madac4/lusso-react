const router = require('express').Router();
const Product = require('../models/Product');

// * CREATE PRODUCT
router.post('/', async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
});

// * UPDATE PRODUCT
router.put('/:id', async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true },
        );
        res.status(200).json(updateProduct);
    } catch (error) {
        res.status(500).json(error);
    }
});

// * DELETE PRODUCT
router.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json('Product has been deleted');
    } catch (error) {
        res.status(500).json(error);
    }
});

// * GET PRODUCT
router.get('/find/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
});

// * GET ALL PRODUCTS
router.get('/', async (req, res) => {
    const qNew = req.query.new;
    // const qId = req.query.id;
    const qCategory = req.query.category;
    const qBrand = req.query.brand;
    try {
        let products;
        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(1);
        } else if (qCategory) {
            products = await Product.find({ categories: { $in: [qCategory.toLowerCase()] } });
        } else if (qBrand) {
            products = await Product.find({ brand: qBrand });
        } else {
            products = await Product.find();
        }

        // else if (qId) {
        //     products = await Product.find({ _id: qId });
        // }

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
