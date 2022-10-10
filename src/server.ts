import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { connect } from './database/database'
import { buildSchemaSync } from 'type-graphql'
import { UserResolver } from './resolvers/user.resolver'

const PORT = 3000

async function start () {
  const schema = buildSchemaSync({
    resolvers: [UserResolver]
  })

  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      const context = {
        req
      }

      return context
    }
  })

  return server.listen({ port: PORT }).then(async ({ url }) => {
    try {
      await connect()
      console.log(`🚀 Server is running at ${url}`)
    } catch (error) {
      console.log(error)
    }
  })
}

start()
