import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },


    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },

    // Industry like: Technology, Healthcare, Finance, etc.
    industry: {
      type: String,
      required: true,
    },

    // Testimonial text the client gives
    testimonial: {
      type: String,
      required: true,
    },

    // Logo URL (Cloudinary or local)
    logo: {
      type: String,
      required: true,
    },

    // Star rating 1–5
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },

    // Project name or summary
    project: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },

    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

const Client = mongoose.model("Client", clientSchema);
export default Client;
