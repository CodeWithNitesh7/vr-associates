import axiosInstance from "../axiosInstance";

// ============================
// 🌐 FRONT PAGE CLIENTS (Public)
// ============================

// Get limited client data for homepage (logo, name, testimonial, rating)
export const getFrontClients = async () => {
  try {
    const response = await axiosInstance.get("/clients/get-front-clients");
    return response.data.clients;
  } catch (error) {
    console.error("Error fetching front clients:", error);
    return [];
  }
};

// ============================
// 🔐 ADMIN PANEL CLIENTS (Protected)
// ============================

// Get all clients (Admin)
export const getAllClients = async () => {
  try {
    const response = await axiosInstance.get("/clients/get-all-clients");
    return response.data.clients;
  } catch (error) {
    console.error("Error fetching clients:", error);
    return [];
  }
};

// Get a client by ID (Admin)
export const getClientById = async (id) => {
  try {
    const response = await axiosInstance.get(`/clients/get-client/${id}`);
    return response.data.client;
  } catch (error) {
    console.error("Error fetching client:", error);
    return null;
  }
};

// Add a new client (Admin)
export const addClient = async (payload) => {
  try {
    const response = await axiosInstance.post("/clients/add-client", payload);
    return response.data.client;
  } catch (error) {
    console.error("Error adding client:", error);
    throw error;
  }
};

// Update a client (Admin)
export const updateClient = async (id, payload) => {
  try {
    const response = await axiosInstance.put(
      `/clients/update-client/${id}`,
      payload
    );
    return response.data.client;
  } catch (error) {
    console.error("Error updating client:", error);
    throw error;
  }
};

// Delete a client (Admin)
export const deleteClient = async (id) => {
  try {
    const response = await axiosInstance.delete(
      `/clients/delete-client/${id}`
    );
    return response.data.client;
  } catch (error) {
    console.error("Error deleting client:", error);
    throw error;
  }
};
