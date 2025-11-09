import mongoose from "mongoose";

const digiSchema = new mongoose.Schema(
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

    price: {
      type: String,
      required: [true, "Service price is required"],
      trim: true,
      // Example: "₹9,999 / month"
    },

    features: {
      type: [String],
      required: [true, "Features are required"],
      validate: [(arr) => arr.length > 0, "At least one feature is required"],
      // Example: ["Social Media Management (2 Platforms)", "Basic SEO Optimization", "Monthly Performance Report"]
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
digiSchema.pre("save", function (next) {
  if (!this.slug && this.name) {
    this.slug = this.name.toLowerCase().replace(/ /g, "-");
  }
  next();
});

const DigitalMarket = mongoose.model("DigitalMarket", digiSchema);
export default DigitalMarket;
