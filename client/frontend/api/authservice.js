import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    localStorage.setItem('user', JSON.stringify(response.data)); // Store token
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, { name, email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getDashboard = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user || !user.accessToken) throw new Error('Unauthorized');

  try {
    const response = await axios.get(`${API_URL}/user/dashboard`, {
      headers: { Authorization: `Bearer ${user.accessToken}` },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
