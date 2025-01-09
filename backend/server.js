const express = require('express');
const cors = require('cors');
const colors = require('colors');
const connectdb = require('./db/db');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;
connectdb();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', require('./routes/JobRoutes'));

app.listen(port, () => console.log(`server started on port ${port}`));
