require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
   console.log('MongoDB connection Success');
  } catch (error) {
    new Error(error)
    console.log(error);
    console.error("MongoDB connection Fail");
    process.exit(1);
  }
};
module.exports = connectDB;
