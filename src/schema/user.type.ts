import { UserType } from '../database/schemas/user'
import { Field, ObjectType, ID } from 'type-graphql'

@ObjectType('User')
export class User implements UserType {
  @Field(_type => ID, { nullable: true })
    id: string

  @Field()
    name: string

  @Field()
    email: string

  @Field()
    password: string

  @Field({ nullable: true })
    createdAt: Date

  @Field({ nullable: true })
    updatedAt: Date
}
