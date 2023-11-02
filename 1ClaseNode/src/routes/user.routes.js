const { Router } = require('express');
const controller = require('../controllers/user.controller');
const userRoutes = Router();


userRoutes.get('/', controller.getUser);

userRoutes.post('/users', controller.postUser);

userRoutes.delete('/users', controller.deleteUser);

userRoutes.put('/:name', controller.updateUser);


module.exports = userRoutes;