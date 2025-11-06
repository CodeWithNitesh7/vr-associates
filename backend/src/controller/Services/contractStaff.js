import ContractStaff from "../../models/Services/contractModel.js";

// Create a new contract staff service
export const createContractStaff = async (req, res) => {
  try {
    const { icon, name, description } = req.body;
    const newService = new ContractStaff({ icon, name, description });
    await newService.save();
    res.status(201).json({ message: "Contract staff service created", service: newService });
  } catch (error) {
    res.status(500).json({ message: "Error creating service", error: error.message });
  }
};

// Get all contract staff services
export const getAllContractStaff = async (req, res) => {
  try {
    const services = await ContractStaff.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Error fetching services", error: error.message });
  }
};
// Get a single contract staff service by ID
export const getContractStaffById = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await ContractStaff.findById(id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: "Error fetching service", error: error.message });
  }
};

// Update a contract staff service by ID
export const updateContractStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedService = await ContractStaff.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ message: "Service updated", service: updatedService });
  } catch (error) {
    res.status(500).json({ message: "Error updating service", error: error.message });
  }
};

// Delete a contract staff service by ID
export const deleteContractStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedService = await ContractStaff.findByIdAndDelete(id);
    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ message: "Service deleted" });
    } catch (error) {
    res.status(500).json({ message: "Error deleting service", error: error.message });
  }
};