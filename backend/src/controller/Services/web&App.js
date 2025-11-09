import WebAppDev from "../../models/Services/web&App.js";

// ✅ Create a new Web & App Development project
export const createWebAppDev = async (req, res) => {
  try {
    const { title, type, image, description, techStack, link } = req.body;

    if (!title || !type || !description) {
      return res.status(400).json({ message: "Title, Type, and Description are required" });
    }

    const newProject = new WebAppDev({
      title,
      type, // "Web", "App", or "Both"
      image: image || "", // optional
      description,
      techStack: techStack || [],
      link: link || "",
    });

    await newProject.save();

    res.status(201).json(newProject); // return the saved object
  } catch (error) {
    res.status(500).json({
      message: "Error creating Web & App Development project",
      error: error.message,
    });
  }
};

// ✅ Get all Web & App Development projects
export const getAllWebAppDev = async (req, res) => {
  try {
    const projects = await WebAppDev.find();
    res.status(200).json(projects); // return array directly
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Web & App Development projects",
      error: error.message,
    });
  }
};

// ✅ Get a single Web & App Development project by ID
export const getWebAppDevById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await WebAppDev.findById(id);

    if (!project) {
      return res.status(404).json({ message: "Web & App Development project not found" });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Web & App Development project",
      error: error.message,
    });
  }
};

// ✅ Update Web & App Development project by ID
export const updateWebAppDev = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedProject = await WebAppDev.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedProject) {
      return res.status(404).json({ message: "Web & App Development project not found" });
    }

    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({
      message: "Error updating Web & App Development project",
      error: error.message,
    });
  }
};

// ✅ Delete Web & App Development project by ID
export const deleteWebAppDev = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProject = await WebAppDev.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({ message: "Web & App Development project not found" });
    }

    res.status(200).json({ message: "Web & App Development project deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Web & App Development project",
      error: error.message,
    });
  }
};
