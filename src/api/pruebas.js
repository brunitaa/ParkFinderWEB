import axios from "./axios";

export const get20Ofertantes = async () => axios.get("/auth/top20Ofertantes");
