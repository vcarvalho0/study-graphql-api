import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { schema } from './schema/user.resolver'
import { connect } from './database/database'

const PORT = 3000

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    const context = {
      req
    }

    return context
  }
})

server.listen(PORT).then(async ({ url }) => {
  try {
    await connect()
    console.log(`🚀 Server is running at ${url}`)
  } catch (error) {
    console.log(error)
  }
})
