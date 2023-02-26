import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

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

