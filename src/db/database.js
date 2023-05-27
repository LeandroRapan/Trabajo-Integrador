import mongoose from 'mongoose';


// const connectionString = 'mongodb://127.0.0.1:27017/primerMongo'

 const connectionString = 'mongodb+srv://admin:lea@cluster0.h3rrqya.mongodb.net/primerMongo?retryWrites=true&w=majority'

try {
    await mongoose.connect(connectionString)
    console.log('CONECTADO A MONGO')
} catch (error) {
    console.log(error)
}