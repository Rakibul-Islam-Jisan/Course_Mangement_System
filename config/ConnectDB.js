const mongoose = require('mongoose')

const ConnectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Database is Connected');
        
    } catch (error) {
        console.log('something is wrong',error);
        
    }
}

module.exports = ConnectDB