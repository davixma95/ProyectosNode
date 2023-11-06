const { Router }= require('express');
const userRoutes = Router();
const controller = require ('./../controllers/user.controller')

userRoutes.post('/', controller.createUser);

module.exports = userRoutes;