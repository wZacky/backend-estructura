import http from 'http';
import api from './api/api.js';
import database from './api/config/database.js';

const PORT = 3000;
const server = http.createServer(api);

server.on('listening', () => {
  console.log(`Servidor escuchando en el puerto ${PORT} 🟢`);
})

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log(`Elige otro puerto, el ${PORT} esta en uso`);
  }
  
  console.log(`Ha ocurrido un error en el servidor 🔴 ${error.code}`);
})

server.listen(PORT);
database();
