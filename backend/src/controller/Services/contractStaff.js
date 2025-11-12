import ContractStaff from "../../models/Services/contractModel.js";

//   Create a new contract job
export const createContractStaff = async (req, res) => {
  try {
    const { title, company, duration, compensation, location, urgent, description } = req.body;

    // Validation
    if (!title || !company || !duration || !location || !description) {
      return res.status(400).json({ message: "Title, Company, Duration, Location, and Description are required" });
    }

    const newJob = new ContractStaff({
      title,
      company,
      duration,
      compensation,
      location,
      urgent: urgent || false,
      description,
    });

    await newJob.save();

    res.status(201).json({
      message: "Contract job created successfully",
      job: newJob,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating contract job",
      error: error.message,
    });
  }
};

//   Get all contract jobs
export const getAllContractStaff = async (req, res) => {
  try {
    const jobs = await ContractStaff.find();
    res.status(200).json({
      message: "All contract jobs fetched successfully",
      jobs,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching contract jobs",
      error: error.message,
    });
  }
};

//   Get a single contract job by ID
export const getContractStaffById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await ContractStaff.findById(id);

    if (!job) {
      return res.status(404).json({ message: "Contract job not found" });
    }

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching contract job",
      error: error.message,
    });
  }
};

//   Update contract job by ID
export const updateContractStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedJob = await ContractStaff.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedJob) {
      return res.status(404).json({ message: "Contract job not found" });
    }

    res.status(200).json({
      message: "Contract job updated successfully",
      job: updatedJob,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating contract job",
      error: error.message,
    });
  }
};

//   Delete contract job by ID
export const deleteContractStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedJob = await ContractStaff.findByIdAndDelete(id);

    if (!deletedJob) {
      return res.status(404).json({ message: "Contract job not found" });
    }

    res.status(200).json({ message: "Contract job deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting contract job",
      error: error.message,
    });
  }
};
