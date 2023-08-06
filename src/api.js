const API_URL = process.env.REACT_APP_ARTICLO_SERVER_URL;

export const fetchAsk = async (question) => {
  try {
    const response = await fetch(`${API_URL}/api/article`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: question }),
    });
    const responseText = await response.json();
    return responseText;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchEdit = async (edit) => {
  try {
    const response = await fetch(`${API_URL}edit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: edit }),
    });
    const responseText = await response.json();
    return responseText;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
