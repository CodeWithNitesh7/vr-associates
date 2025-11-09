import axiosInstance from "../axiosInstance";

// 🟢 Add new Contract Staff service
export const addContractStaff = async (data) => {
  try {
    const response = await axiosInstance.post("/allServices/add-contract-staff", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Error adding Contract Staff" };
  }
};

// 🟢 Get all Contract Staff services
export const getAllContractStaff = async () => {
  try {
    const response = await axiosInstance.get("/allServices/get-contract-staff");
    return response.data.jobs; // backend sends { services: [...] }
  } catch (error) {
    throw error.response?.data || { message: "Error fetching Contract Staff" };
  }
};

// 🟢 Get single Contract Staff service by ID
export const getContractStaffById = async (id) => {
  try {
    const response = await axiosInstance.get(`/getId-contract-staff/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Error fetching Contract Staff by ID" };
  }
};

// 🟢 Update Contract Staff service
export const updateContractStaff = async (id, data) => {
  try {
    const response = await axiosInstance.put(`/allServices/update-contract-staff/${id}`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Error updating Contract Staff" };
  }
};

// 🟢 Delete Contract Staff service
export const deleteContractStaff = async (id) => {
  try {
    const response = await axiosInstance.delete(`/allServices/delete-contract-staff/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Error deleting Contract Staff" };
  }
};
