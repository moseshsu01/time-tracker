const mongoose = require('mongoose');

const connString = 'mongodb://mongo-db/time-tracker';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(connString);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = connectDB;
