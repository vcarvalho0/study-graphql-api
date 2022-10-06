import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { schema } from './schema/user.resolver'
import { connect } from './database/database'

const PORT = 3000
connect()

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    const context = {
      req
    }

    return context
  }
})

server.listen({ PORT }).then(({ url }) => {
  console.log(`🚀 Server is running at ${url}`)
})
