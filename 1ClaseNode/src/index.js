const express = require('express');
const app = express();
const path = require('path');
// const PORT = 8000;
const userRoutes = require('./routes/user.routes');
require('dotenv').config();

app.use(express.json());
app.use('/api/users',userRoutes);

app.listen(process.env.PORT, () => {
  console.log('Servidor levantado: ', process.env.PORT);
});

// app.get('/', (request, response) => {
//     // console.log(request)
//     response.send({ message: 'Hola' });
// });

// app.get('/users', (request, response) => {
//     fs.readFile(filePath, (err, data) => {
//         if (err) {
//             //Informar error
//         }
//         const jsonData = JSON.parse(data);
//         response.send(jsonData);
//     });
// });

// app.get('/users/:userId', (request, response) => {
//     const userId = request.params.userId;

//     fs.readFile(filePath, (err, data) => {
//         if (err) {
//             response.status(500).send('Error al leer el archivo');
//             return;
//         }

//         const jsonData = JSON.parse(data);
//         const user = jsonData.find(user => user.userId === userId);

//         if (user) {
//             response.send(user);
//         } else {
//             response.status(404).send('Usuario no encontrado');
//         }
//     });
// });


// app.use(express.json());//Los datos que llegan en json lo pasa a js para que lo pueda leer-> esto es un middleware, esta en medio del cliente y servidor

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

// app.post('/user', (req,res) => {
//     const newUser = req.body;

//     fs.readFile(filePath, (err, data) => {
//         let users = JSON.parse(data);
//         users.push(newUser);
//         fs.writeFile(filePath, JSON.stringify(users), (err) => {
//             console.log(JSON.stringify(users)); // TODO EL JSON
//             // res.send('Agregado correctamente');
//         });
//     });
// });

// app.get('/users', async (req,res) => {
//     try{
//         const data = fs.readFile(filePath);
//         const jsonData = await JSON.parse(data);
//         res.send(jsonData);
//     }
//     catch(message){
//         console.error('ERROR');
//     }
// })

// app.delete('/users',async (req,res) => {
//     const data = fs.readFile(filePath);
//     const jsonData = await JSON.parse(data);
//     fs.writeFile(filePath, JSON.stringify(jsonData));
//     res.send();
// });

// app.put('/actualizo/:name', async (req, res) => {
//     const userIdToUpdate = req.params.id;

//     const data = fs.readFile(filePath, 'utf-8');
//     const jsonData = JSON.parse(data);
    
//     // const updatedData = jsonData.map(user => 
//     //     user.id === userIdToUpdate ? { ...user, ...req.body } : user
//     // );
//     const updatedData = jsonData.filter(user => {
//         console.log({...user}, req.body)
//         // if(user.userId === userIdToUpdate){
//         //     [...user]
//         // }
//         // if(user.id === userIdToUpdate){
//         //      [...user, ...req.body]
//         //     } 
//         //     else {
//         //         user = user.id;
//         //     } 

//     }
//     );
//     // await fs.promises.writeFile(filePath, JSON.stringify(updatedData, null, 2));
//     // res.send();
// });

/*
[
  {
    "userId": "e65e1490-c230-4043-80bc-ea32fee5f57c",
    "title": "Mr.",
    "name": "Andrea Correa",
    "age": "36",
    "username": "Andrea47",
    "email": "Andrea.Correa@hotmail.com",
    "profileImage": "https://randomuser.me/api/portraits/women/61.jpg",
    "active": false,
    
  },
  {
    "userId": "356236ef-a50c-4bc7-9fa6-66450119634f",
    "title": "Miss",
    "name": "Carles Méndez",
    "age": "36",
    "username": "Carles_Fay22",
    "email": "Carles.King30@yahoo.com",
    "profileImage": "https://randomuser.me/api/portraits/men/6.jpg",
    "active": true,
    
  },
  {
    "userId": "5b744899-0deb-4e8b-ac45-f420fccb3a39",
    "title": "Ms.",
    "name": "Ángel Coronado",
    "age": "36",
    "username": "Shany.Coronado10",
    "email": "Laney82@hotmail.com",
    "profileImage": "https://randomuser.me/api/portraits/women/57.jpg",
    "active": false,
    
  },
  {
    "userId": "ceac053f-e991-4e3a-9367-5276bc1ba6e6",
    "title": "Dr.",
    "name": "Daniel Montéz",
    "age": "36",
    "username": "Daniel_Witting43",
    "email": "Daniel_Veum@hotmail.com",
    "profileImage": "https://randomuser.me/api/portraits/men/5.jpg",
    "active": false,
    
  },
  {
    "userId": "df6b1632-881a-4086-a66b-82777469f8f4",
    "title": "Miss",
    "name": "Iván Apodaca",
    "age": "36",
    "username": "Fausto4",
    "email": "Daren.Apodaca@gmail.com",
    "profileImage": "https://randomuser.me/api/portraits/women/88.jpg",
    "active": true,
    
  },
  {
    "userId": "84df87a5-7398-4649-a154-946119c94ac1",
    "title": "Mrs.",
    "name": "Manuel Miramontes",
    "age": "36",
    "username": "Manuel.Miramontes36",
    "email": "Manuel.Miramontes70@yahoo.com",
    "profileImage": "https://randomuser.me/api/portraits/men/93.jpg",
    "active": false,
    
  },
  {
    "userId": "a2f0d7b5-907d-4f87-b990-9fd243bdc635",
    "title": "Ms.",
    "name": "Laura Orta",
    "age": "36",
    "username": "Laura13",
    "email": "Laura.Orta@hotmail.com",
    "profileImage": "https://randomuser.me/api/portraits/men/4.jpg",
    "active": false,
    
  },
  {
    "userId": "bba23781-75e4-4432-b154-f0067a1d9b89",
    "title": "Mrs.",
    "name": "Anni Padilla",
    "age": "36",
    "username": "Anni_Padilla",
    "email": "Anni_Padilla@hotmail.com",
    "profileImage": "https://randomuser.me/api/portraits/women/3.jpg",
    "active": false,
    
  }
]
*/


