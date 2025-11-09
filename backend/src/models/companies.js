import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
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
  industryType: {
    type: String,
    enum: ["IT", "Finance", "Healthcare", "Education", "Other"],
    default: "IT"
  },
  address: {
    type: String
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

const Company = mongoose.model("Company", companySchema);
export default Company;
