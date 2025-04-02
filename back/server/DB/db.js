// back/server/DB/db.js
import mongoose from 'mongoose';
import colors from 'colors';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    console.error('MongoDB URI is missing from the .env file');
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(mongoURI);
    console.log(colors.bgYellow(`MongoDB Connected: ${conn.connection.host}`));
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error('An unknown error occurred');
    }
    process.exit(1);
  }
};

export default connectDB;
