import mongoose from 'mongoose';


// const connectionString = 'mongodb://127.0.0.1:27017/primerMongo'

 const connectionString = process.env.MONGO_URL; 

try {
    await mongoose.connect(connectionString)
    console.log('CONECTADO A MONGO')
} catch (error) {
    console.log(error)
}