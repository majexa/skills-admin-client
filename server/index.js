const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const Hoek = require('hoek');
require('dotenv').config();
const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, '../build/public')
      }
    }
  }
});
server.connection({ port: process.env.PORT });
server.register(Inert, () => {});
server.register(require('vision'), (err) => {
  Hoek.assert(!err, err);
  server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: '../build/public'
  });
});
server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: '.',
      redirectToSlash: true,
      index: true
    }
  }
});
server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    console.log(process.env.SERVER_HOST || 'localhost');
    reply.view('index', {
      host: process.env.SERVER_HOST || 'localhost'
    });
  }
});
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});