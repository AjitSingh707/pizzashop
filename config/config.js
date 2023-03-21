require('dotenv').config()
require('colors')
const mongoose = require('mongoose');

const connectdb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true})
        console.log(`database connected ${conn.connection.host}`.bgCyan)
    } catch (error) {
        console.log(`error: ${error.message}`.bgRed)
    }
}

connectdb()