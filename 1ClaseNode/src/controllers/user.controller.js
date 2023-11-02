const controller = {};
const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, 'data', 'users.json');

controller.updateUser =  () => {
    try{
        const userIdToUpdate = req.params.id;
        const data = fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        
        const updatedData = jsonData.map(user => 
            user.id === userIdToUpdate ? { ...user, ...req.body } : user
        );
        fs.writeFile(filePath, JSON.stringify(updatedData, null, 2));
        res.send();
    }
    catch(message){
        console.error(message)
    }
}

controller.deleteUser= () => {
    try{
        const data = fs.readFile(filePath);
        const jsonData = JSON.parse(data);
        fs.writeFile(filePath, JSON.stringify(jsonData));
        res.send();
    }catch(mensajeError){
        console.error(mensajeError)
    }
}

controller.postUser = ( ) => {
    // app.post('/users', (req,res) => {
    const newUser = req.body;

    fs.readFile(filePath, (err, data) => {
        let users = JSON.parse(data);
        users.push(newUser);
        fs.writeFile(filePath, JSON.stringify(users), (err) => {
            console.log(JSON.stringify(users));
            res.send('Agregado correctamente');
            ;
        });
    // });
})};

controller.getUser = ( )=> {
    try {
        // app.get('/users', async (req,res) => {
        const data = fs.readFile(filePath);
        console.log(data)
        // const jsonData = await JSON.parse(data);
        const jsonData = JSON.parse(data);
        res.send(jsonData);
    
// })
    } catch (error) {
        console.error(error)
    }
}


module.exports = controller;
