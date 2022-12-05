const router = require('express').Router();
const Client = require('../models/Client');

// * CREATE CLIENT
router.post('/', async (req, res) => {
    const newClient = new Client(req.body);
    try {
        const savedClient = await newClient.save();
        res.status(200).json(savedClient);
    } catch (error) {
        res.status(500).json(error);
    }
});

// * UPDATE CLIENT
router.put('/:id', async (req, res) => {
    try {
        const updateClient = await Client.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true },
        );
        res.status(200).json(updateClient);
    } catch (error) {
        res.status(500).json(error);
    }
});

// * DELETE CLIENT
router.delete('/:id', async (req, res) => {
    try {
        await Client.findByIdAndDelete(req.params.id);
        res.status(200).json('Client has been deleted');
    } catch (error) {
        res.status(500).json(error);
    }
});

// * GET GLIENT
router.get('/find/:id', async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/', async (req, res) => {
    try {
        let clients = await Client.find();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
