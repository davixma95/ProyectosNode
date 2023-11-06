const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    username: {
        type:String,
        require:true,
    },
    password: {
        type:String,
        require:true,
    },
    email: {
        type:String,
        require:false,
        unique:true
    },
}, { collection: 'Cluster0' })

const userModel = mongoose.model('UserModel', userScheme);

module.exports = userModel;