// models/owner.js
import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
  name: String,
  email: String,
});


// Hash password before saving
ownerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password
ownerSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


export default mongoose.model("Owner", ownerSchema);
