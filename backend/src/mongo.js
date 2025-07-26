import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({ path: new URL('../src/.env', import.meta.url).pathname })

console.log("MONGODB_URI:", process.env.MONGODB_URI)

const url = process.env.MONGODB_URI;
mongoose.set('strictQuery',false)

try {
  await mongoose.connect(url)
  console.log('Connected to MongoDB')
} catch (error) {
  console.error('Error connecting:', error.message)
}
