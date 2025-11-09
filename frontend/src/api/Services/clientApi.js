import axiosInstance from "../axiosInstance";

// ✅ Get all clients
export const getAllClients = async () => {
  try {
    const response = await axiosInstance.get("/clients/get-all-clients");
    return response.data.clients;
  } catch (error) {
    console.error("Error fetching clients:", error);
    return [];
  }
};

// ✅ Get client by ID
export const getClientById = async (id) => {
  try {
    const response = await axiosInstance.get(`/clients/get-client/${id}`);
    return response.data.client;
  } catch (error) {
    console.error("Error fetching client:", error);
    return null;
  }
};

// ✅ Add new client
export const addClient = async (payload) => {
  try {
    const response = await axiosInstance.post("/clients/add-client", payload);
    return response.data.client;
  } catch (error) {
    console.error("Error adding client:", error);
    throw error;
  }
};

// ✅ Update client
export const updateClient = async (id, payload) => {
  try {
    const response = await axiosInstance.put(`/clients/update-client/${id}`, payload);
    return response.data.client;
  } catch (error) {
    console.error("Error updating client:", error);
    throw error;
  }
};

// ✅ Delete client
export const deleteClient = async (id) => {
  try {
    const response = await axiosInstance.delete(`/clients/delete-client/${id}`);
    return response.data.client;
  } catch (error) {
    console.error("Error deleting client:", error);
    throw error;
  }
};
