import express from 'express';
import bookRoutes from './routes/bookRoutes.js';

const api = express();

// TODO: Configurar Middlewares

api.get('/status', (req, res) => {
  return res.json({
    msg: 'API en linea y funcionando'
  });
});

// TODO: aqui se registran las rutas
api.use(bookRoutes)
// api.use('/api', authorRoutes)

export default api;