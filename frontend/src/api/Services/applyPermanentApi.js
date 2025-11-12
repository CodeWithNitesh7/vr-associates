// api/jobApplicationApi.js
import axiosInstance from "../axiosInstance";

export const submitJobApplication = async (formData) => {
  return axiosInstance.post("/job/apply", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
