import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { PingResolver } from "./resolvers/ping";
import { ProductResolver } from "./resolvers/product.resolver";
import { TiendaResolver } from "./resolvers/tienda.resolver";
import {AuthResolver} from './resolvers/auth.resolver'
export async function startServer() {

  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [TiendaResolver, ProductResolver,AuthResolver],
      
    }),
    context: ({ req, res }) => ({ req, res })
  });

  server.applyMiddleware({ app, path: "/graphql" });

  return app;
}