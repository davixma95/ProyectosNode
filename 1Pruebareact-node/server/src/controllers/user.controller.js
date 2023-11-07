const userModel = require("../schemes/user.scheme");

const controller = {};


controller.getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find();
        // const allUsers = await userModel.findById(req.params.id);
        res.status(200).send(allUsers);
    } catch(error) {
        console.error(error)
    }
}


controller.createUser = async(req,res) => {
    const { username, password, email } = req.body;
    const newUser = new userModel({
        username,
        password,
        email,
    })
    try{  
        await newUser.save();
    } catch(error){
        console.error('El error es ',error);
    }
};

module.exports = controller;

