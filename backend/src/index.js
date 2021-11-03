import fastify from 'fastify';
import sequelize from './config.js';
import fastifyMultipart from 'fastify-multipart';
import fastifyJWT from 'fastify-jwt';
import path from 'path';
import ingredientRoutes from './routes/ingredientRoutes.js';
import userRoutes from './routes/userRoutes.js';
import fridgeRoutes from './routes/fridgeRoutes.js';
import recipeRoutes from './routes/recipeRoutes.js';
import stepRoutes from './routes/stepRoutes.js';
import fastifyStatic from 'fastify-static';
import createFakeData from './models/createFakeData.js';
import options from './swagger.js';
import fastifySwagger from 'fastify-swagger';

const env = process.env.NODE_ENV || 'development';

const baseRoutes = [ingredientRoutes, userRoutes, fridgeRoutes, recipeRoutes, stepRoutes];
const server = fastify({ logger: true });
server.register(fastifyMultipart);
server.register(fastifyJWT, { secret: (process.env.JWT_SECRET || 'imabanana') });
server.register(fastifyStatic, { root: path.join(path.resolve(), 'uploads'), prefix: '/uploads/' });
server.register(fastifySwagger, options);

const synchronize = async () => await sequelize.sync({ force: true });
const fakeLoad = async () => await createFakeData();

server.decorate('authenticate', async function (req, res) {
  try {
    await req.jwtVerify();
  } catch (err) {
    res.send(err);
  }
});

// Default route
server.get('/', async (req, res) => {
  return { Message: 'Welcome to MiamLand API' };
});

server.get('/images/:image', async (req, res) => {
  res.sendFile(req.params.image);
});

baseRoutes.forEach((routes) => {
  routes.forEach((route) => {
    if (route.url !== '/api/signup' && route.url !== '/api/login') {
      route.preValidation = [server.authenticate];
    }
    server.route(route);
  });
});

// Run the server
const PORT = 8000 || process.env.PORT;
const startServer = async () => {
  try {
    if (env === 'development') {
      await synchronize();
      await fakeLoad();
    }
    await server.listen(PORT);
    await server.swagger();
    console.log(`Server running on 127.0.0.1:${PORT}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

await startServer();

export default server;
