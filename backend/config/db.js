const mongoose = require("mongoose");

const connectDB = async () => { 
    try {
        //console.log("MongoDB connected"+process.env.PORT);
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected"+process.env.PORT);
    } catch (error) {
        console.log(error);
    }
};
module.exports = connectDB;      