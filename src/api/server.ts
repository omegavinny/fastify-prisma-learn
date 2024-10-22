import fastify, { FastifyInstance } from 'fastify';
import fastifyCors from '@fastify/cors';
import { HOST, PORT } from '../config';
import { useRoutes } from './router';

const app: FastifyInstance = fastify({ logger: true });

app.register(fastifyCors);
app.register(useRoutes);

app.listen({ host: HOST, port: PORT })
	.then((address) => {
		console.log(`Server runnning in ${address}`);
	})
	.catch((error) => {
		console.log(error.message);
		process.exit(1);
	});
