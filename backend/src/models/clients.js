import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true 
  },
  company: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    lowercase: true 
  },
  project: { 
    type: String, 
    required: true 
  },
  logo: { 
    type: String, // store image URL or path
    required: false, // optional
  },
  status: { 
    type: String, 
    enum: ["Active", "Inactive"], 
    default: "Active" 
  },
  notes: { 
    type: String 
  },
}, { timestamps: true });

const Client = mongoose.model("Client", clientSchema);
export default Client;
