const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes    = require('./routes/auth.routes');
const productRoutes = require('./routes/product.routes');

const app = express();

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

app.use('/api/auth',     authRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => res.json({ message: 'IMS Ephoria API is running 🚀' }));

module.exports = app;