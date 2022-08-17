import Client from "../models/Client.js";

const getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();

    return res.json({
      msg: 'Clientes encontrados',
      data: {
        clients,
      }
    })
  } catch (error) {
    
  }
}