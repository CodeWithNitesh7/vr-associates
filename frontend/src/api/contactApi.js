import axiosInstance from "./axiosInstance";

export const submitContact = async (data) =>{
    const res = await axiosInstance.post('/contact/submit-message',data)
    return res.data
}