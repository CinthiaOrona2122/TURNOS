// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(
  jsonServer.rewriter({
    "/turnos/:id": "/turnos/:id", // Manejar solicitudes por ID
    "/turnos/categoria/:categoria": "/turnos?categoria=:categoria", // Manejar solicitudes por categoría
    "/turnos/categoria/:categoria/numero/:numero":
      "/turnos?categoria=:categoria&numero=:numero", // Manejar solicitudes por categoría y número
  })
);
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server