import fastify from 'fastify';

// Instantiate fastify
const server = fastify({ logger: true });

// Default route
server.get('/', async (req, res) => {
  return { Message: 'Welcome to MiamLand API' };
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

startServer();
