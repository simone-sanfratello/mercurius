'use strict'

const Fastify = require('fastify')
const mercurius = require('..')
const { schema, resolvers } = require('./normal-setup')

const app = Fastify()

app.register(mercurius, {
  schema,
  resolvers,
  graphiql: false,
  jit: 1
})

app.listen(3000)