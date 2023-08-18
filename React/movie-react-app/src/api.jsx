import axios from "axios";


const API_BASE_URL = "http://localhost:5000/";

export const getFilms = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}films`);
    return response.data;
  } catch (error) {
    console.error("Filmler getirilirken bir hata oluştu : ", error);
    return [];
  }
};
