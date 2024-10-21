import { FastifyInstance } from "fastify";
import { processosRoutes } from "./processos";

export async function useRoutes(fastify: FastifyInstance) {
    fastify.register(processosRoutes, { prefix: '/processos' });
}
