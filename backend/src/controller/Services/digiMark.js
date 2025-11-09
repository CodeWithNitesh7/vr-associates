import DigitalMarket from "../../models/Services/digiModel.js";

// ✅ Create a new Digital Marketing service
export const createDigitalMarket = async (req, res) => {
  try {
    const { icon, name, price, features } = req.body;

    if (!icon || !name || !price || !features || features.length === 0) {
      return res.status(400).json({ message: "Icon, Name, Price, and Features are required" });
    }

    const newService = new DigitalMarket({ icon, name, price, features });
    await newService.save();

    res.status(201).json({
      message: "Digital Marketing service created successfully",
      service: newService,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating digital marketing service",
      error: error.message,
    });
  }
};

// ✅ Get all Digital Marketing services
export const getAllDigitalMarkets = async (req, res) => {
  try {
    const services = await DigitalMarket.find();
    res.status(200).json({
      message: "All Digital Marketing services fetched successfully",
      services,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching digital marketing services",
      error: error.message,
    });
  }
};

// ✅ Get a single Digital Marketing service by ID
export const getDigitalMarketById = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await DigitalMarket.findById(id);

    if (!service) {
      return res.status(404).json({ message: "Digital Marketing service not found" });
    }

    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching digital marketing service",
      error: error.message,
    });
  }
};

// ✅ Update a Digital Marketing service by ID
export const updateDigitalMarket = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedService = await DigitalMarket.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedService) {
      return res.status(404).json({ message: "Digital Marketing service not found" });
    }

    res.status(200).json({
      message: "Digital Marketing service updated successfully",
      service: updatedService,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating digital marketing service",
      error: error.message,
    });
  }
};

// ✅ Delete a Digital Marketing service by ID
export const deleteDigitalMarket = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedService = await DigitalMarket.findByIdAndDelete(id);

    if (!deletedService) {
      return res.status(404).json({ message: "Digital Marketing service not found" });
    }

    res.status(200).json({ message: "Digital Marketing service deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting digital marketing service",
      error: error.message,
    });
  }
};
