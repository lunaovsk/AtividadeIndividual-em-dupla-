const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || "mongodb+srv://matheusbluna:math123@cluster0.puu6f9z.mongodb.net/liveclass?retryWrites=true&w=majority&appName=Cluster0";
    await mongoose.connect(uri);
    console.log('Database connection successful');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
