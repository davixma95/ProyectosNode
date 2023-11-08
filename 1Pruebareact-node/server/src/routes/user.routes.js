const { Router }= require('express');
const userRoutes = Router();
const controller = require ('./../controllers/user.controller')

userRoutes.post('/', controller.createUser);
userRoutes.post('/login', controller.login);
// userRoutes.delete('/:id', controller.deleteUser);
// userRoutes.put('/:id', controller.updateUser);

module.exports = userRoutes;