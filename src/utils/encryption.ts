import CryptoJS from 'crypto-js'
import dotenv from 'dotenv'

dotenv.config()

const SECRET_KEY = process.env.ENCRYPTION_KEY || 'default_secret'

export const encryptData = (data: string): string => {
  return CryptoJS.AES.encrypt(data, SECRET_KEY).toString()
}

export const decryptData = (ciphertext: string): string => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY)
  return bytes.toString(CryptoJS.enc.Utf8)
}
