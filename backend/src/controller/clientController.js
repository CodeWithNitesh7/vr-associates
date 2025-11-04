import Client from "../models/clients.js";

export const addClient = async (req, res) => {
  try {
    const { logo, name, email, status, notes } = req.body;

    const existing = await Client.findOne({ email });
    if (existing) {
      return res.status(400).json({ msg: "Client already exists" });
    }

    const newClient = new Client({
      logo,
      name,
      email,
      status,
      notes
    });

    await newClient.save();

    res.status(201).json({
      msg: "Client added successfully",
      client: newClient
    });
  } catch (error) {
    console.error("Error adding client", error);
    return res.status(500).json({ msg: "Failed to add client" });
  }
};


export const getAllClient = async (req,res) => {
    try {
        const clients = await Client.find();

        if (clients.length === 0) {
            return res.status(404).json({msg:"No client found"})
        }

        res.status(200).json({msg:"Clients",
            clients
        })
    } catch (error) {
        console.error("Cannot fetch the clients",error);
        return res.status(500).json({msg:"Error fetching clients"})
    }
}

export const deleteClient = async (req, res) => {
  try {
    const { id } = req.params; // delete via URL param (recommended)

    const client = await Client.findByIdAndDelete(id);

    if (!client) {
      return res.status(404).json({ msg: "Client not found" });
    }

    res.status(200).json({
      msg: "Client deleted successfully",
      deletedClient: client,
    });
  } catch (error) {
    console.error("Error deleting client:", error);
    return res.status(500).json({ msg: "Failed to delete client" });
  }
};
