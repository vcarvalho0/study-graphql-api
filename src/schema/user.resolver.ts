import { UserResolver } from '../controller/user'
import { buildSchemaSync } from 'type-graphql'
import { User } from './user'

export const schema = buildSchemaSync({
  resolvers: [User, UserResolver]
})
