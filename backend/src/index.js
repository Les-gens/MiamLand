import fastify from 'fastify';
import sequelize from "./config.js";
import User from "./models/User.js";

const server = fastify({ logger: true });

// /!\ Remove force sync when in prod
const synchronize = async () => await sequelize.sync({force:true});

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
synchronize();
startServer();

