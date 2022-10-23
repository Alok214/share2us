require('dotenv').config();
const uri = "mongodb+srv://alokshare:123456alok@cluster0.1usfryk.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 🥳
    // mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    // const connection = mongoose.connection();
    // connection.once('open', () => {
    //     console.log('Database connected ')
    // }).catch(err => {
    //     console.log('Connection failed');
    // });
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => {
        console.log('MongoDB Connected…')
      })
      .catch(err => console.log(err))
}

// mIAY0a6u1ByJsWWZ
module.exports = connectDB;