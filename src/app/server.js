// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Middleware to handle auto-incrementing IDs
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    const data = router.db.get('items').value();
    const maxId = data.reduce((max, item) => (item.id > max ? item.id : max), 0);
    req.body.id = maxId + 1;
  }
  next();
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});