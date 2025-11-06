import InfraIoT from "../../models/Services/infraIoTModel.js";

// ✅ Create a new Infra & IoT service
export const createInfraIoT = async (req, res) => {
  try {
    const { icon, name, description } = req.body;

    if (!icon || !name) {
      return res.status(400).json({ message: "Icon and Name are required" });
    }

    const newService = new InfraIoT({ icon, name, description });
    await newService.save();

    res.status(201).json({
      message: "Infrastructure & IoT service created successfully",
      service: newService,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Infrastructure & IoT service",
      error: error.message,
    });
  }
};

// ✅ Get all Infra & IoT services
export const getAllInfraIoT = async (req, res) => {
  try {
    const services = await InfraIoT.find();
    res.status(200).json({
      message: "All Infrastructure & IoT services fetched successfully",
      services,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Infrastructure & IoT services",
      error: error.message,
    });
  }
};

// ✅ Get a single Infra & IoT service by ID
export const getInfraIoTById = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await InfraIoT.findById(id);

    if (!service) {
      return res.status(404).json({ message: "Infrastructure & IoT service not found" });
    }

    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Infrastructure & IoT service",
      error: error.message,
    });
  }
};

// ✅ Update Infra & IoT service by ID
export const updateInfraIoT = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedService = await InfraIoT.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedService) {
      return res.status(404).json({ message: "Infrastructure & IoT service not found" });
    }

    res.status(200).json({
      message: "Infrastructure & IoT service updated successfully",
      service: updatedService,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Infrastructure & IoT service",
      error: error.message,
    });
  }
};

// ✅ Delete Infra & IoT service by ID
export const deleteInfraIoT = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedService = await InfraIoT.findByIdAndDelete(id);

    if (!deletedService) {
      return res.status(404).json({ message: "Infrastructure & IoT service not found" });
    }

    res.status(200).json({ message: "Infrastructure & IoT service deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Infrastructure & IoT service",
      error: error.message,
    });
  }
};
