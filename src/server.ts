import { ApolloServer } from 'apollo-server'

const PORT = 3000;

const server = new ApolloServer({
  context: ({ req }) => {
    const context = {
      req,
      token: req?.headers?.authorization
    }

    return context
  }
})

server.listen({ PORT }).then(({ url }) => {
  console.log(`🚀 Server is running at ${url}`)
})