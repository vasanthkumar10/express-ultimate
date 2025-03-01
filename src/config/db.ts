import { Pool } from 'pg'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const connectDB = async (dbURI: string, usePostgres = false) => {
  if (usePostgres) {
    const pool = new Pool({ connectionString: dbURI })
    await pool.connect()
    console.log('Connected to PostgreSQL')
    return pool
  } else {
    await mongoose.connect(dbURI)
    console.log('Connected to MongoDB')
  }
}

export default connectDB
