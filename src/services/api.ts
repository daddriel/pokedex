import axios from "axios";

export const APIREST = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const APIGQL = axios.create({
  baseURL: "https://beta.pokeapi.co/graphql/v1beta"
});

