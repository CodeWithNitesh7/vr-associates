import mongoose from "mongoose";

const contractSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
      minlength: [3, "Job title must be at least 3 characters long"],
      maxlength: [200, "Job title cannot exceed 200 characters"],
    },

    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
      maxlength: [150, "Company name cannot exceed 150 characters"],
    },

    duration: {
      type: String,
      required: [true, "Duration is required"],
      trim: true,
      maxlength: [50, "Duration cannot exceed 50 characters"],
    },

    compensation: {
      type: String,
      trim: true,
      maxlength: [100, "Compensation cannot exceed 100 characters"],
    },

    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
      maxlength: [150, "Location cannot exceed 150 characters"],
    },

    urgent: {
      type: Boolean,
      default: false,
    },

    description: {
      type: String,
      required: [true, "Job description is required"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters long"],
      maxlength: [1000, "Description cannot exceed 1000 characters"],
    },

    slug: {
      type: String,
      lowercase: true,
      unique: true,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

// Automatically generate slug before saving
contractSchema.pre("save", function (next) {
  if (!this.slug && this.title) {
    this.slug = this.title.toLowerCase().replace(/ /g, "-");
  }
  next();
});

const ContractStaff = mongoose.model("ContractStaff", contractSchema);
export default ContractStaff;
