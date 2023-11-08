const userModel = require("../schemes/user.scheme");

const bcrypt = require('bcrypt');
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

controller.updateUser = async (req, res) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).send('Usuario no encontrado');
        } else{
            res.status(200).send(updatedUser);

        }
    } catch(error) {
        console.error(error);
        res.status(500).send('Error al actualizar el usuario');
    }
}


controller.deleteUser = async (req, res) => {
    try {
        const deleteUser = await userModel.findByIdAndDelete(req.params.id, req.body, { new: true });
        if (!deleteUser) {
            return res.status(404).send('Usuario no encontrado');
        } else{
            res.status(200).send(deleteUser);

        }
    } catch(error) {
        console.error(error);
        res.status(500).send('Error al actualizar el usuario');
    }
}



controller.createUser = async(req,res) => {
    const { username, password, email } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new userModel({
        username,
        password: hashedPassword,
        email,
    })
    try{  
        await newUser.save();
        res.status(200).json({ message: 'User created successfully' });
    } catch(error){
        console.error('El error es ',error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

controller.login = async (req,res) => {
    try{
        const { email, password} = req.body;
        const userFound = await userModel.findOne({ email });
        if(!userFound){
            return res.status(400).json({message:'The user was not found'})
        }

        const isMatch = bcrypt.compare(password, userFound.password);
        if(!isMatch){
            return res.status(400).json({message:'The user was not found'});
        }

        const token = await createAccessToken({
            id:userFound._id,
            username: userFound.username
        })

        res.cookie('token', token);

        res.json({
            id:userFound._id,
            username: userFound.username,
            email: userFound.email
        })

    }catch(error){
        return res.status(500).json({message:error.message})
    }
}


module.exports = controller;

