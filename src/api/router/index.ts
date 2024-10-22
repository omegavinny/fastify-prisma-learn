import { FastifyInstance } from 'fastify';
import { rolesRoutes } from './roles';
import { rulesRoutes } from './rules';
import { usersRoutes } from './users';

export async function useRoutes(fastify: FastifyInstance) {
	fastify.register(rolesRoutes, { prefix: '/roles' });
	fastify.register(rulesRoutes, { prefix: '/rules' });
	fastify.register(usersRoutes, { prefix: '/users' });
}
