# Express Ultimate Boilerplate

A robust and scalable Express.js boilerplate with built-in authentication, database support (MongoDB & PostgreSQL), Redis integration, logging, encryption, and Swagger documentation.

## Features

- 🚀 **Express.js**: Lightweight and fast web framework
- 🔐 **Authentication**: JWT-based authentication
- 🗄️ **Database Support**: MongoDB & PostgreSQL
- 🛡️ **Security**: Helmet, CORS, Rate Limiting
- 📝 **Swagger API Documentation**: Auto-generated API docs
- 🛠 **Redis Integration**: For caching and session management
- 📊 **Logging**: Winston for structured logs
- 🔒 **Encryption**: AES encryption for sensitive data
- 🏗 **TypeScript Support**: Fully typed API

## Installation

```sh
npm install express-ultimate
```

or for local development:

```sh
git clone https://github.com/your-repo/express-ultimate.git
cd express-ultimate
npm install
```

## Usage

### Basic Example

```typescript
import express from 'express'
import {
  connectDB,
  redisClient,
  logger,
  encryptData,
  decryptData
} from 'express-ultimate'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

// Connect Database
const DB_URI = process.env.DB_URI || ''
connectDB(DB_URI, process.env.USE_POSTGRES === 'true')

// Example Route
app.get('/', async (req, res) => {
  await redisClient.set('message', encryptData('Hello from Redis!'))
  const message = decryptData((await redisClient.get('message')) || '')
  res.json({ message })
})

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})
```

## Environment Variables

Create a `.env` file in your root directory:

```env
PORT=5000
DB_URI=mongodb://localhost:27017/mydb
USE_POSTGRES=false
REDIS_URL=redis://localhost:6379
ENCRYPTION_KEY=mysecretkey
```

## API Documentation

Swagger documentation is automatically generated. Run the server and access:

```
http://localhost:5000/api-docs
```

## Redis Usage

```typescript
import { redisClient } from 'express-ultimate'
await redisClient.set('key', 'value')
const value = await redisClient.get('key')
console.log(value)
```

## Database Connection

```typescript
import { connectDB } from 'express-ultimate'
connectDB(process.env.DB_URI, process.env.USE_POSTGRES === 'true')
```

## Logging

```typescript
import { logger } from 'express-ultimate'
logger.info('This is an info log')
logger.error('This is an error log')
```

## Encryption

```typescript
import { encryptData, decryptData } from 'express-ultimate'
const encrypted = encryptData('Hello World')
console.log(decryptData(encrypted))
```

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature-branch`)
5. Open a Pull Request

## 🎯 License

This project is licensed under the **MIT License**.

---

## 📬 Contact

- **Author:** Vasanthkumar
- **GitHub:** [@vasanthkumar10](https://github.com/vasanthkumar10)
- **Email:** vasizebron10@gmail.com
