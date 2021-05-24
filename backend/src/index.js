import fastify from 'fastify';
import sequelize from './config.js';
import fastifyMultipart from 'fastify-multipart';
import fastifyJWT from 'fastify-jwt';

import ingredientRoutes from './routes/ingredientRoutes.js';
import userRoutes from './routes/userRoutes.js';
import fridgeRoutes from './routes/fridgeRoutes.js';
import recipeRoutes from './routes/recipeRoutes.js';
import stepRoutes from './routes/stepRoutes.js';

const baseRoutes = [ingredientRoutes, userRoutes, fridgeRoutes, recipeRoutes, stepRoutes];
const server = fastify({ logger: true });
server.register(fastifyMultipart);
server.register(fastifyJWT, { secret: (process.env.JWT_SECRET || 'imabanana') });

// /!\ Remove force sync when in prod
const synchronize = async () => await sequelize.sync({ force: true });

// Default route
server.get('/', async (req, res) => {
  return { Message: 'Welcome to MiamLand API' };
});

baseRoutes.forEach((routes) => {
  routes.forEach((route) => server.route(route));
});

// Run the server
const PORT = 8000 || process.env.PORT;
const startServer = async () => {
  try {
    await server.listen(PORT);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

export default server;

synchronize();
startServer();
