import { decryptData, encryptData } from './utils/encryption'
import express, { Application } from 'express'

import connectDB from './config/db'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import logger from './config/logger'
import rateLimit from 'express-rate-limit'
import redisClient from './config/redis'

dotenv.config()
const app: Application = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }))

// Connect to Database
const DB_URI = process.env.DB_URI || ''
const USE_POSTGRES = process.env.USE_POSTGRES === 'true'
connectDB(DB_URI, USE_POSTGRES)

// Default Route
app.get('/', (req, res) => {
  res.send('Express Ultimate Boilerplate is running!')
})

// Function to register custom routes
const registerRoutes = (callback: (app: Application) => void) => {
  callback(app)
}

// Start the server automatically
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`)
})

export {
  app,
  registerRoutes,
  connectDB,
  redisClient,
  logger,
  encryptData,
  decryptData
}
