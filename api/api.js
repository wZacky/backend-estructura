import express from 'express';

const api = express();

api.get('/status', (req, res) => {
  return res.json({
    msg: 'API en linea y funcionando'
  });
});

export default api;