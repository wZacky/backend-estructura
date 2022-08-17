import mongoose, { Schema } from "mongoose";

const schemaClient = new Schema({
  name: String,
  birthDate: Date,
  age: Number,
  addresses: [String],
  references: [{
    name: String,
    phone: String,
  }],
  email: String,
  phone: String
});

export default mongoose.model('Client', schemaClient);