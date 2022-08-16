import http from 'http';
import api from './api/api.js';

const PORT = 3000;
const server = http.createServer(api);

server.listen(PORT);

server.on('listening', () => {
  console.log(`Servidor escuchando en el puerto ${PORT} 🟢`);
})

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log(`Elige otro puerto, el ${PORT} esta en uso`);
  }

  console.log(`Ha ocurrido un error en el servidor 🔴 ${error.code}`);
})
