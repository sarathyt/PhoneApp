var connect = require('connect'),
serveStatic = require('serve-static'),
PORT = 4500;
connect().use(serveStatic(__dirname)).listen(PORT, function () {
console.log('Server running on ' + PORT + '...');
});