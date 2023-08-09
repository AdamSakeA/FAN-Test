import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/";

export const API = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
});
