import fastify, { FastifyInstance } from "fastify";
import fastifyCors from "@fastify/cors";
import { APP_HOST, APP_PORT } from '../config';
import { useRoutes } from "./router";

const app: FastifyInstance = fastify({ logger: true });

app.register(fastifyCors);
app.register(useRoutes);

app.listen({ host: APP_HOST, port: APP_PORT }).then(address => {
    console.log(`Server runnning in ${address}`);
}).catch(error => {
    console.log(error.message);
    process.exit(1);
});
