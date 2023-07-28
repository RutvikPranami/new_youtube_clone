import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";


const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    //ADD your RAPID_API_KEY here
    "X-RapidAPI-Key": `${process.env.REACT_APP_RAPID_API_KEY}`,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const FeatchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  console.log(data);

  return data;
};
