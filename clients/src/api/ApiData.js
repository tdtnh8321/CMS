import axios from 'axios';

const API_URL = 'http://localhost:5000';

export default async function CallApi(endpoint, method, data) {
  const url = `${API_URL}/${endpoint}`;
  try {
    const response = await axios({
      method: method,
      url: url,
      data: data
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

