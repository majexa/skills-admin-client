var Hapi = require('hapi');
var server = new Hapi.Server();

// add server’s connection information
server.connection({
  host: 'localhost',
  port: 8060
});

server.register({
  register: require('inert')
}, function(err) {
  if (err) throw err;
  server.start(function(err) {
    console.log('Server started at: ' + server.info.uri)
  })
});

server.route({
  method: 'GET',
  path: '/{file*}',
  handler: {
    directory: {
      path: '../build/public'
    }
  }
});