import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    icon: {
      type: String,
      required: [true, "Service icon is required"],
      trim: true,
      // Example: "fa-solid fa-briefcase" or a path to an image
    },

    name: {
      type: String,
      required: [true, "Service name is required"],
      trim: true,
      minlength: [3, "Service name must be at least 3 characters long"],
      maxlength: [100, "Service name cannot exceed 100 characters"],
      unique: true,
    },

    description: {
      type: String,
      required: [true, "Service description is required"],
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
serviceSchema.pre("save", function (next) {
  if (!this.slug && this.name) {
    this.slug = this.name.toLowerCase().replace(/ /g, "-");
  }
  next();
});

const Service = mongoose.model("Service", serviceSchema);
export default Service;
