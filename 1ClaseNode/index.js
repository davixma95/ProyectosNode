const express = require('express');
const app = express();
// const cors = require('cors')

const PORT = 3000;


app.listen(PORT, () => {
    console.log('Servidor levantado: ', PORT);
});


app.get('/', (request, response) => {
    console.log(request);
    response.end();
})
