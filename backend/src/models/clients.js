import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  logo: {
    type: String,
    required: true,
    unique: true
  },
  name:{
    type:String,
    required:true,
    unique:true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active"
  },
  notes: {
    type: String
  }
}, { timestamps: true });

const Client = mongoose.model("Client", clientSchema);
export default Client;
