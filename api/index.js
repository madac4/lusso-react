const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
var cors = require('cors');

const productRoute = require('./routes/product');
const advantageRoute = require('./routes/advantage');
const clientRoute = require('./routes/client');
const brandRoute = require('./routes/brand');
const subcategoryRoute = require('./routes/subcategory');
const categoryRoute = require('./routes/category');

const app = express();
app.use(cors());
dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('Database connect successfull'))
    .catch((err) => console.log(err));

app.use(express.json());
app.use('/api/products', productRoute);
app.use('/api/advantages', advantageRoute);
app.use('/api/clients', clientRoute);
app.use('/api/brands', brandRoute);
app.use('/api/subcategories', subcategoryRoute);
app.use('/api/categories', categoryRoute);

app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(process.env.PORT || 8888, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});
