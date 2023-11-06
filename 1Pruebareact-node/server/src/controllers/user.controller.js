const userModel = require("../schemes/user.scheme");

const controller = {};

controller.createUser = (req,res) => {
    const { username, password, email } = req.body;
    const newUser = new userModel({
        username,
        password,
        email,
    })
    newUser.save();
};

module.exports = controller;

