import mongoose, { Schema } from 'mongoose'

export type UserType = {
  id: string
  name: string
  email: string
  password: string
  createdAt?: Date
  updatedAt?: Date
}

const UserSchema = new Schema<UserType>(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: false
    },
    updatedAt: {
      type: Date,
      default: Date.now,
      required: false
    }
  },
  {
    timestamps: {}
  }
)

const model = mongoose.model<UserType>('User', UserSchema)

export default model
