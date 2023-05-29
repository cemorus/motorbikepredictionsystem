import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (formData) => API.post("/login", formData);
export const signUp = (formData) => API.post("/register", formData);

export const sellBike = (bikeData) => {
  const formData = new FormData();

  Object.entries(bikeData).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return axios.post("http://localhost:8000/sell", bikeData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
      },
  });
};

export const getBikes = () => API.get("/sell");

export const getBike = (id) => API.get(`/${id}`);
export const deleteBike = (id) => API.delete(`/sell/${id}`);
export const updateBike = (updatedBikeData, id) =>
  API.put(`/sell/${id}`, updatedBikeData);
export const getBikesByUser = (userId) => API.get(`/sell/${userId}`);
export const getBikesBySearch = (searchQuery) => API.get(`/sell/search?searchQuery=${searchQuery}`);
export const predictPrice = (predictData) => API.post(`/predict`, predictData);
