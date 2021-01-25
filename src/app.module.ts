// ======================================
//			Main Modules
// ======================================
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {buildSchema, ResolverData} from 'type-graphql';
import connect from './config/database';
import { join } from 'path';
import {Container} from 'typedi';

// ======================================
//				Bootstraping
// ======================================
export default async function App(){

	// Iniciando la conexion a la BD
    await connect();
    const app = express();
	
	// Configurando el esquema de GraphQL
    const schema = await buildSchema({
		validate: false,
		resolvers: [
			join(__dirname, '/models/**.model.{ts,js}'),
			join(__dirname, '/app/**/**.resolver.{ts,js}'),
		],
		dateScalarMode: 'timestamp',
		container: ({ context }: ResolverData<any>) =>
			Container.of(context.requestId),
    });
	
	// Inicializando el Apollo Server
    const apolloServer = new ApolloServer({
		schema,
		playground: true,
		context: ({ req, res }) => ({ req, res }),
		uploads: false,
	});

	apolloServer.applyMiddleware({ app, path: '/v1' });

    return app;
}