import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export async function usersRoutes(fastify: FastifyInstance) {
	fastify.get('/', (request: FastifyRequest, reply: FastifyReply) => {});
	fastify.post('/', (request: FastifyRequest, reply: FastifyReply) => {});
	fastify.get('/:id', (request: FastifyRequest, reply: FastifyReply) => {});
	fastify.patch('/:id', (request: FastifyRequest, reply: FastifyReply) => {});
	fastify.delete('/:id', (request: FastifyRequest, reply: FastifyReply) => {});
}
