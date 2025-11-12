import axiosInstance from "./axiosInstance";

//   Submit contact message
export const submitContact = async (data) => {
  const res = await axiosInstance.post("/contact/submit-message", data);
  return res.data;
};

// Get all contact messages
export const getAllContacts = async () => {
  try {
    const res = await axiosInstance.get("/contact/getContactDetails");
    return res.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return [];
  }
};

// Delete contact by ID
export const deleteContact = async (id) => {
  try {
    const res = await axiosInstance.delete(`/contact/delete/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting contact:", error);
    throw error;
  }
};
