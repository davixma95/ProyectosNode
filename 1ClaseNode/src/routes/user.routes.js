const { Router } = require('express');

const userRoutes = Router();


userRoutes.get('/users', controller.getUser);

userRoutes.post('/user', controller.postUser);

userRoutes.delete('/users', controller.deleteUser);

userRoutes.put('/actualizo/:name', controller.updateUser);


module.exports = userRoutes;