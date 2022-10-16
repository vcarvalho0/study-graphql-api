import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { User } from '../resolvers/user.type'
import UserSchema from '../database/schemas/user'
import bcrypt from 'bcrypt'

@Resolver(User)
export class UserResolver {
  @Query(_return => [User], { name: 'users' })
  async find () {
    const user = await UserSchema.find().select(['id', 'name', 'email', 'createdAt', 'updatedAt'])
    return user
  }

  @Mutation(_return => User, { name: 'user' })
  async findById (@Arg('id') id: string) {
    const user = await UserSchema.findById(id)

    if (!user) {
      throw new Error('User not found')
    }

    return user
  }

  @Mutation(_return => User, { name: 'createUser' })
  async create (
    @Arg('name') name: string,
    @Arg('email') email: string,
    @Arg('password') password: string
  ) {
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await UserSchema.create({ name, email, password: hashedPassword })

    return user
  }
}
