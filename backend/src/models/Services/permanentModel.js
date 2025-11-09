import mongoose from "mongoose";

const permanentSchema = new mongoose.Schema(
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

    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
      maxlength: [100, "Location cannot exceed 100 characters"],
    },

    salary: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Job description is required"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters long"],
      maxlength: [1000, "Description cannot exceed 1000 characters"],
    },

    urgent: {
      type: Boolean,
      default: false,
    },

    slug: {
      type: String,
      lowercase: true,
      // removed `unique` to prevent duplicate key errors
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
permanentSchema.pre("save", function (next) {
  if (this.title) {
    // create a unique-ish slug with timestamp
    const baseSlug = this.title.toLowerCase().replace(/ /g, "-");
    this.slug = `${baseSlug}-${Date.now()}`;
  }
  next();
});

const PermanentStaff = mongoose.model("PermanentStaff", permanentSchema);
export default PermanentStaff;
