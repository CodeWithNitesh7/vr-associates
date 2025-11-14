import Client from "../models/clients.js";

// =====================================================
// ADD NEW CLIENT  (Admin Only)
// =====================================================
export const addClient = async (req, res) => {
  try {
    const {
      name,
      email,
      industry,
      testimonial,
      logo,
      rating,
      project,
      status,
      notes,
    } = req.body;

    const existing = await Client.findOne({ email });
    if (existing)
      return res.status(400).json({ msg: "Client already exists" });

    const newClient = new Client({
      name,
      email,
      industry,
      testimonial,
      logo,
      rating,
      project,
      status,
      notes,
    });

    await newClient.save();

    res.status(201).json({
      msg: "Client added successfully",
      client: newClient,
    });
  } catch (error) {
    console.error("Error adding client:", error);
    return res.status(500).json({ msg: "Failed to add client" });
  }
};

// =====================================================
// GET ALL CLIENTS → PUBLIC DATA ONLY
// (Homepage, Landing page, Client Testimonials section)
// =====================================================
export const getAllClients = async (req, res) => {
  try {
    // Only select fields that frontend should display publicly
    const clients = await Client.find().select(
      "name logo testimonial rating"
    );

    res.status(200).json({
      msg: "Clients fetched successfully",
      clients,
    });
  } catch (error) {
    console.error("Error fetching clients:", error);
    return res.status(500).json({ msg: "Failed to fetch clients" });
  }
};

// =====================================================
// GET ALL CLIENTS FOR ADMIN (FULL DETAILS)
// =====================================================
export const getAllClientsAdmin = async (req, res) => {
  try {
    const clients = await Client.find(); // full details

    res.status(200).json({
      msg: "Admin clients fetched successfully",
      clients,
    });
  } catch (error) {
    console.error("Error fetching admin clients:", error);
    return res.status(500).json({ msg: "Failed to fetch clients" });
  }
};

// =====================================================
// GET CLIENT BY ID (Admin view)
// =====================================================
export const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findById(id);

    if (!client)
      return res.status(404).json({ msg: "Client not found" });

    res.status(200).json({ client });
  } catch (error) {
    console.error("Error fetching client:", error);
    return res.status(500).json({ msg: "Failed to fetch client" });
  }
};

// =====================================================
// UPDATE CLIENT (Admin)
// =====================================================
export const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedClient = await Client.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedClient)
      return res.status(404).json({ msg: "Client not found" });

    res.status(200).json({
      msg: "Client updated successfully",
      client: updatedClient,
    });
  } catch (error) {
    console.error("Error updating client:", error);
    return res.status(500).json({ msg: "Failed to update client" });
  }
};

// =====================================================
// DELETE CLIENT (Admin)
// =====================================================
export const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedClient = await Client.findByIdAndDelete(id);

    if (!deletedClient)
      return res.status(404).json({ msg: "Client not found" });

    res.status(200).json({
      msg: "Client deleted successfully",
      client: deletedClient,
    });
  } catch (error) {
    console.error("Error deleting client:", error);
    return res.status(500).json({ msg: "Failed to delete client" });
  }
};
