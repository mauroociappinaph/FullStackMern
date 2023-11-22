import axios from "axios";

const clienteAxios = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/veterinarios`,
});

//NOTE -  Interceptores para manejar errores
clienteAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error en la solicitud:", error);
    return Promise.reject(error);
  }
);

export default clienteAxios;

//! Revisar el mongo atlas. No debe estar conectado