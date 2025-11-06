import PermanentStaff from "../../models/Services/permanentModel";

// ✅ Create a new Permanent Staffing service
export const createPermanentStaff = async (req, res) => {
  try {
    const { icon, name, description } = req.body;

    if (!icon || !name) {
      return res.status(400).json({ message: "Icon and Name are required" });
    }

    const newService = new PermanentStaff({ icon, name, description });
    await newService.save();

    res.status(201).json({
      message: "Permanent Staffing service created successfully",
      service: newService,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Permanent Staffing service",
      error: error.message,
    });
  }
};

// ✅ Get all Permanent Staffing services
export const getAllPermanentStaff = async (req, res) => {
  try {
    const services = await PermanentStaff.find();
    res.status(200).json({
      message: "All Permanent Staffing services fetched successfully",
      services,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Permanent Staffing services",
      error: error.message,
    });
  }
};

// ✅ Get a single Permanent Staffing service by ID
export const getPermanentStaffById = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await PermanentStaff.findById(id);

    if (!service) {
      return res.status(404).json({ message: "Permanent Staffing service not found" });
    }

    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Permanent Staffing service",
      error: error.message,
    });
  }
};

// ✅ Update Permanent Staffing service by ID
export const updatePermanentStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedService = await PermanentStaff.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedService) {
      return res.status(404).json({ message: "Permanent Staffing service not found" });
    }

    res.status(200).json({
      message: "Permanent Staffing service updated successfully",
      service: updatedService,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Permanent Staffing service",
      error: error.message,
    });
  }
};

// ✅ Delete Permanent Staffing service by ID
export const deletePermanentStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedService = await PermanentStaff.findByIdAndDelete(id);

    if (!deletedService) {
      return res.status(404).json({ message: "Permanent Staffing service not found" });
    }

    res.status(200).json({ message: "Permanent Staffing service deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Permanent Staffing service",
      error: error.message,
    });
  }
};
