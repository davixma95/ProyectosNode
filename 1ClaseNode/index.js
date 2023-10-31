const express = require('express');
const app = express();
const path = require('path');
const PORT = 8000;
const fs = require('fs');
app.use(express.json());

app.listen(PORT, () => {
    console.log('Servidor levantado: ', PORT);
});

const filePath = path.resolve(__dirname, 'data', 'users.json');

app.get('/', (request, response) => {
    // console.log(request)
    response.send({ message: 'Hola' });
});

app.get('/users', (request, response) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            //Informar error
        }
        const jsonData = JSON.parse(data);
        response.send(jsonData);
    });
});

app.get('/users/:userId', (request, response) => {
    const userId = request.params.userId;

    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.status(500).send('Error al leer el archivo');
            return;
        }

        const jsonData = JSON.parse(data);
        const user = jsonData.find(user => user.userId === userId);

        if (user) {
            response.send(user);
        } else {
            response.status(404).send('Usuario no encontrado');
        }
    });
});


app.use(express.json());//Los datos que llegan en json lo pasa a js para que lo pueda leer-> esto es un middleware, esta en medio del cliente y servidor

// app.post('/user', (req,res) => {
//     console.log(req.body);
//     res.send();
// })

// app.post('/user', (req, res) => {
//     const newUser = req.body;

//     fs.readFile(filePath, (err, data) => {
//         let users = JSON.parse(data);
//         users.push(newUser);
//         fs.writeFile(filePath, JSON.stringify(users), (err) => {
//             res.send('Usuario agregado correctamente');
//         });
//     });
// });

app.post('/user', (req,res) => {
    const newUser = req.body;

    fs.readFile(filePath, (err, data) => {
        let users = JSON.parse(data);
        users.push(newUser);
        fs.writeFile(filePath, JSON.stringify(users), (err) => {
            console.log(JSON.stringify(users)); // TODO EL JSON
            // res.send('Agregado correctamente');
        });
    });
});

app.get('/users', async (req,res) => {
    try{
        const data = fs.readFile(filePath);
        const jsonData = await JSON.parse(data);
        res.send(jsonData);
    }
    catch(message){
        console.error('ERROR');
    }
})

app.delete('/users',async (req,res) => {
    const data = fs.readFile(filePath);
    const jsonData = await JSON.parse(data);

    fs.writeFile(filePath, JSON.stringify(jsonData));

    res.send();
})









