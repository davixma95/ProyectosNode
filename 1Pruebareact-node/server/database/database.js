const mongoose = require('mongoose')

const databaseConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log(`MongoDB Connected`)
  } 
  catch (error) {
    console.log(error)
  }
  finally{
    await mongoose.connection.close();
  }
}

module.exports = databaseConnect;