import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://community-final-vf8t.vercel.app/api", // --- IGNORE ---
  // baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",  // --- IGNORE ---
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
