import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "2347b7dd88msh0f9e5b251d57815p1c5044jsn8038bdf5d47d",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });


  return data;
};
