const fastify = require('fastify')({ logger: false });

fastify.register(require('fastify-swagger'), {
  routePrefix: '/docs',
  exposeRoute: true,
  swagger: {
    info: { title: 'fastify-api' },
  },
});

fastify.register(require('./resources/users/user.router'));
fastify.register(require('./resources/boards/board.router'));
fastify.register(require('./resources/tasks/task.router'));

const { PORT } = require('./common/config');

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
