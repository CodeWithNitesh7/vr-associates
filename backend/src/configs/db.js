const mongoose = require('mongoose');

exports.connectDB = async()=>{
    const uri = process.env.MONGO_URI;
    try {
        const connect = mongoose.connect
    } catch (error) {
        return res.status()
    }
}