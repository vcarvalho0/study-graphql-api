import { getEnv } from '../resources/env'
import mongoose, { Mongoose } from 'mongoose'

export const connect = async (): Promise<Mongoose> => {
  return await mongoose.connect(getEnv('DB_URL'))
}

mongoose.connection.on('error', () => console.log('Database error!'))
mongoose.connection.once('open', () => console.log('Connected to the database!'))
