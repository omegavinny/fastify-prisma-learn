import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export async function processosRoutes (fastify: FastifyInstance) {
    fastify.get('/', (request: FastifyRequest, reply: FastifyReply) => {
        reply.send('processos');
    });
    fastify.post('/', (request: FastifyRequest, reply: FastifyReply) => {});
    fastify.get('/:id', (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };
        reply.send(`processos/${id}`);
    });
    fastify.patch('/:id', (request: FastifyRequest, reply: FastifyReply) => {});
    fastify.delete('/:id', (request: FastifyRequest, reply: FastifyReply) => {});
}
