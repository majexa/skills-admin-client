const Path = require('path');
var Hapi = require('hapi');
var server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'public')
      }
    }
  }
});

// add server’s connection information
server.connection({
  port: 8051
});

server.register({
  register: require('inert')
}, function(err) {
  if (err) throw err;
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '../build/public'
      }
    }
  });
});

server.start(function(err) {
  console.log('Server started at: ' + server.info.uri)
});

