import http from 'http';
import api from './api/api.js';
import database from './api/config/database.js';
import credentials from './api/config/index.js';

console.clear();

//const PORT = 3000;
const server = http.createServer(api);

server.on('listening', () => {
  console.log(`Servidor escuchando en el puerto ${credentials.server.port} 🟢`);
})

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log(`Elige otro puerto, el ${credentials.server.port} esta en uso`);
  }
  
  console.log(`Ha ocurrido un error en el servidor 🔴 ${error.code}`);
})

server.listen(credentials.server.port);
database();
