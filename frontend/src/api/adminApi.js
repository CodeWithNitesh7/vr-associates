    import axiosInstance from "./axiosInstance";

export const adminLogin = async (data) => {
    const res = await axiosInstance.post('/auth/admin/login',data);
    return res.data
}

