import axios from "axios";

const BASE_URL = "https://dev.tibiadata.com/v4/creatures";

export const fetchCreatures = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        accept: "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching creatures:", error);
    throw error;
  }
};
