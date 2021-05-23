import fastify from 'fastify';
import sequelize from "./config.js";
import Action from "./models/Action.js";
import User from "./models/User.js";
import Unit from "./models/Unit.js";
import Ingredient from "./models/Ingredient.js";
import Recipe from "./models/Recipe.js";
import Step from "./models/Step.js";
import Fridge from "./models/Fridge.js";


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

