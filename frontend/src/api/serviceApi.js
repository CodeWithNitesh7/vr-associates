import axiosInstance from "./axiosInstance";

export const addService = async (data) => {
  const res = await axiosInstance.post('/service/add-service', data);
  return res.data;
};

export const getAllServices = async () => {
  const res = await axiosInstance.get('/service/get-all-services');
  return res.data;
};

export const deleteService = async (name) => {
  const res = await axiosInstance.delete(`/service/delete-service/${name}`);
  return res.data;
};

export const updateService = async (id, data) => {
  const res = await axiosInstance.put(`/service/update-service/${id}`, data);
  return res.data;
};
