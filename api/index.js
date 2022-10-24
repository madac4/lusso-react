const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
var cors = require('cors');

const productRoute = require('./routes/product');
const advantageRoute = require('./routes/advantage');

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

app.listen(process.env.PORT || 8888, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});
