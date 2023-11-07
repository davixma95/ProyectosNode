const userModel = require("../schemes/user.scheme");

const controller = {};

controller.createUser = (req,res) => {
    try{
        const { username, password, email } = req.body;
        const newUser = new userModel({
        username,
        password,
        email,
    })
        newUser.save();
   

    } catch(error){
        console.error('El error es ',error)
    }
};

module.exports = controller;

