const express = require('express');
const app = express();
// const path = require('path');
const PORT = 3000;
// const userRoutes = require('./routes/user.routes');

// app.use('/api/users',userRoutes);

// app.listen(PORT, () => {
//   console.log('Servidor levantado: ', PORT);
// });

app.get('/', (request, response) => {
    console.log(request)
    response.send({ message: 'Hola' });
});