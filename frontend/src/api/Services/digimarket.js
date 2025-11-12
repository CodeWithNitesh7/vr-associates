// frontend/src/api/Services/digitalMarketApi.js
import axiosInstance from "../axiosInstance.js";

//   Get all Digital Marketing plans
export const getAllDigitalMarkets = async () => {
  try {
    const response = await axiosInstance.get("/allServices/get-digital-marketing");
    return response.data.services || [];
  } catch (error) {
    console.error("Error fetching digital marketing plans:", error);
    return [];
  }
};

//   Add a new Digital Marketing plan
export const addDigitalMarket = async (payload) => {
  try {
    const response = await axiosInstance.post("/allServices/add-digital-marketing", payload);
    return response.data.service;
  } catch (error) {
    console.error("Error adding digital marketing plan:", error);
    throw error;
  }
};

//   Update a Digital Marketing plan
export const updateDigitalMarket = async (id, payload) => {
  try {
    const response = await axiosInstance.put(`/allServices/update-digital-marketing/${id}`, payload);
    return response.data.service;
  } catch (error) {
    console.error("Error updating digital marketing plan:", error);
    throw error;
  }
};

//   Delete a Digital Marketing plan
export const deleteDigitalMarket = async (id) => {
  try {
    const response = await axiosInstance.delete(`/allServices/delete-digital-marketing/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting digital marketing plan:", error);
    throw error;
  }
};
