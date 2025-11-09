import mongoose from "mongoose";

const webAppDevSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ["Web", "App", "Both"],
      required: true,
    },
    image: {
      type: String,
      required: false, 
    },
    description: {
      type: String,
      required: true,
    },
    techStack: {
      type: [String],
      default: [],
    },
    link: {
      type: String,
      default: "", // optional live/demo link
    },
  },
  { timestamps: true }
);

const WebAppDev = mongoose.model("WebAppDev", webAppDevSchema);
export default WebAppDev;
