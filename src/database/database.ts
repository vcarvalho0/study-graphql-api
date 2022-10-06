import mongoose, { Mongoose } from 'mongoose'

export const connect = async (): Promise<Mongoose> => {
  return await mongoose.connect('mongodb://root:123@localhost:27017')
}

mongoose.connection.on('error', () => console.log('Database error!'))
mongoose.connection.once('open', () => console.log('Connected to the database!'))
