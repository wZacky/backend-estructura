import mongoose from "mongoose";

const db = mongoose.connection;

db.on('connecting', () => {
  console.log('Intentando conectar a BD 🟨');
});

db.on('connected', () => {
  console.log('Se ha conectado a la BD 🟩');
});

db.on('error', () => {
  console.log('Error al conectarse a la BD 🟥');
});

export default () => {
  mongoose.connect('mongodb://localhost/library');
}
