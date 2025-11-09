// frontend/src/api/webAppApi.js
import axiosInstance from "../axiosInstance"; // Adjust the path if needed

// ✅ Get all web/app entries (for overview dashboard)
export const getAllWebApps = async () => {
  try {
    const response = await axiosInstance.get("/allServices/get-web-app-dev");
    // Assuming backend returns { message: "...", webApps: [...] }
    return Array.isArray(response.data) ? response.data : []; // Return array, empty if undefined
  } catch (error) {
    console.error("Error fetching web/apps:", error);
    return [];
  }
};

// Optional: Add a new web/app entry
export const addWebApp = async (payload) => {
  try {
    const response = await axiosInstance.post("/allServices/add-web-app-dev", payload);
    return response.data;
  } catch (error) {
    console.error("Error adding web/app:", error);
    throw error;
  }
};

// Optional: Get by ID
export const getWebAppById = async (id) => {
  try {
    const response = await axiosInstance.get(`/allServices/getId-web-app-dev/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching web/app by ID:", error);
    return null;
  }
};

// Optional: Update by ID
export const updateWebApp = async (id, payload) => {
  try {
    const response = await axiosInstance.put(`/allServices/update-web-app-dev/${id}`, payload);
    return response.data;
  } catch (error) {
    console.error("Error updating web/app:", error);
    throw error;
  }
};

// Optional: Delete by ID
export const deleteWebApp = async (id) => {
  try {
    const response = await axiosInstance.delete(`/allServices/delete-web-app-dev/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting web/app:", error);
    throw error;
  }
};
