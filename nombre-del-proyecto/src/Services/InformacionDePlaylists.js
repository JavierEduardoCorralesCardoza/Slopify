const API_URL = "http://localhost:3001/api/playlist";

export async function InformacionDePlaylists(){
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};