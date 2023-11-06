const express = require('express');
const app = express();
const mongoose = require('mongoose');
const databaseConnect = require('../database/database');
require('dotenv').config();
const userRoutes = require('./routes/user.routes')
app.use(express.json());
app.use(userRoutes);

app.listen(process.env.PORT, () => {
  console.log('Servidor levantado: ', process.env.PORT);
});
databaseConnect();

// app.get('/', (req, res) => {
//     // console.log(request)
//     res.send({ message: 'Hola' });
// });