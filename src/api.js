import axios from "axios";

const API_URL = process.env.REACT_APP_ARTICLO_SERVER_URL;

const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const fetchAsk = async (question) => {
  try {
    const token = getToken();
    const response = await axios.post(
      `${API_URL}/api/article`,
      { prompt: question },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchEdit = async (edit) => {
  try {
    const token = getToken();
    const response = await axios.post(
      `${API_URL}/api/edit`,
      { prompt: edit },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
