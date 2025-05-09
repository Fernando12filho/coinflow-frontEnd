import axios from "axios";
const BASE_URL = "https://coinflow-backend.onrender.com";
//const BASE_URL = "http://127.0.0.1:5000";

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }, 
    withCredentials: true
});

