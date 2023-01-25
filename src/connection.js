import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
export default function Connection() {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log('Successfully connected to the database');
    })
    .catch((err) => {
      console.log('Could not connect to the database. Error...', err);
      process.exit();
    });
}
