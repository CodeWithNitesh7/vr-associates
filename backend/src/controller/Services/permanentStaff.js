import PermanentStaff from "../../models/Services/permanentModel.js";

//   Create a new Permanent Job
export const createPermanentStaff = async (req, res) => {
  try {
    const { title, company, location, salary, description, urgent } = req.body;

    // Validation
    if (!title || !company || !description) {
      return res.status(400).json({ message: "Title, Company, and Description are required" });
    }

    const newJob = new PermanentStaff({
      title,
      company,
      location,
      salary,
      description,
      urgent: urgent || false,
    });

    await newJob.save();

    res.status(201).json({
      message: "Permanent job posted successfully",
      job: newJob,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating permanent job",
      error: error.message,
    });
  }
};

//   Get all Permanent Jobs
export const getAllPermanentStaff = async (req, res) => {
  try {
    const jobs = await PermanentStaff.find();
    res.status(200).json({
      message: "All permanent jobs fetched successfully",
      jobs,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching permanent jobs",
      error: error.message,
    });
  }
};

//   Get a single Permanent Job by ID
export const getPermanentStaffById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await PermanentStaff.findById(id);

    if (!job) {
      return res.status(404).json({ message: "Permanent job not found" });
    }

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching permanent job",
      error: error.message,
    });
  }
};

//   Update Permanent Job by ID
export const updatePermanentStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedJob = await PermanentStaff.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedJob) {
      return res.status(404).json({ message: "Permanent job not found" });
    }

    res.status(200).json({
      message: "Permanent job updated successfully",
      job: updatedJob,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating permanent job",
      error: error.message,
    });
  }
};

//   Delete Permanent Job by ID
export const deletePermanentStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedJob = await PermanentStaff.findByIdAndDelete(id);

    if (!deletedJob) {
      return res.status(404).json({ message: "Permanent job not found" });
    }

    res.status(200).json({ message: "Permanent job deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting permanent job",
      error: error.message,
    });
  }
};
