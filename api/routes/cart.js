const router = require('express').Router();
const Cart = require('../models/Cart');

// * CREATE CART
router.post('/', async (req, res) => {
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (error) {
        res.status(500).json(error);
    }
});

// * UPDATE CART
router.put('/:id', async (req, res) => {
    try {
        const updateCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true },
        );
        res.status(200).json(updateCart);
    } catch (error) {
        res.status(500).json(error);
    }
});

// * DELETE CART
router.delete('/:id', async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json('Cart has been deleted');
    } catch (error) {
        res.status(500).json(error);
    }
});

// * GET CART
// router.get('/find/:id', async (req, res) => {
//     try {
//         const cart = await Cart.find(req.params.id);
//         res.status(200).json(cart);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

module.exports = router;
