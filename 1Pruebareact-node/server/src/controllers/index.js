const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config();
const DatabaseConnect = require('./../../database/database');
DatabaseConnect();

// const path = require('path');
// const userRoutes = require('./routes/user.routes');
// app.use('/api/users',userRoutes);


app.listen(process.env.PORT, () => {
  console.log('Servidor levantado: ', process.env.PORT);
});

app.get('/', (request, response) => {
    // console.log(request)
    response.send({ message: 'Hola' });
});