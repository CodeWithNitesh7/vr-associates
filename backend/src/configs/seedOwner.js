import dotenv from "dotenv";
dotenv.config();

import Owner from '../models/owner.js';
import connectDB from './db.js';

const seedOwner = async () => {
  try {
    await connectDB();

    // Delete old owner if exists
    await Owner.deleteOne;

    // Create owner with plain password
    const owner = new Owner({
      name: "Vinay Singh",
      email: "rampc45.07@gmail.com",
      password: "vinay105@", // plain password
      role: "owner",
    });

    await owner.save(); // pre('save') will hash the password automatically

    console.log("✅ Owner created:", owner.email);
    process.exit(0);
  } catch (error) {
    console.log("❌ Error creating owner:", error);
    process.exit(1);
  }
};

seedOwner();
