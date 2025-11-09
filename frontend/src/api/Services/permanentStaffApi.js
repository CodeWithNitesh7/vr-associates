import axiosInstance from "../axiosInstance";

// 🟢 Add new Permanent Staff service
export const addPermanentStaff = async (data) => {
  try {
    const response = await axiosInstance.post("/allServices/add-permanent-staff", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Error adding Permanent Staff" };
  }
};

// 🟢 Get all Permanent Staff services
export const getAllPermanentStaff = async () => {
  try {
    const response = await axiosInstance.get("/allServices/get-permanent-staff");
    return response.data.jobs || []; // since backend returns {services: [...]}
  } catch (error) {
    throw error.response?.data || { message: "Error fetching Permanent Staff" };
  }
};

// 🟢 Get single Permanent Staff by ID
export const getPermanentStaffById = async (id) => {
  try {
    const response = await axiosInstance.get(`/allServices/getId-permanent-staff/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Error fetching Permanent Staff by ID" };
  }
};

// 🟢 Update Permanent Staff service
export const updatePermanentStaff = async (id, data) => {
  try {
    const response = await axiosInstance.put(`/allServices/update-permanent-staff/${id}`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Error updating Permanent Staff" };
  }
};

// 🟢 Delete Permanent Staff service
export const deletePermanentStaff = async (id) => {
  try {
    const response = await axiosInstance.delete(`/allServices/delete-permanent-staff/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Error deleting Permanent Staff" };
  }
};
