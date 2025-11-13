import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      default: "",
      trim: true,
    },
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    phoneNumber: {
      type: String,
      trim: true,
      default: "",
    },
    resume: {
      type: String,
      required: [true, "Resume file is required"], // now stores Cloudinary URL
    },
    cloudinaryId: {
      type: String,
      required: true, // needed for deletion
    },
    status: {
      type: String,
      enum: ["Pending", "Reviewed", "Accepted", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("JobApplication", jobApplicationSchema);
