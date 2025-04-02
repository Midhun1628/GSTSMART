import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(email, password) {
      try {
        const response = await axios.post('http://localhost:3000/auth/login', { email, password });
        this.token = response.data.accessToken;
        localStorage.setItem('token', this.token);
      } catch (error) {
        console.error(error.response.data);
        throw error;
      }
    },
    
    async register(username, email, password,firstname,lastname) {
      try {
        await axios.post('http://localhost:3000/auth/register', { username, email, password,first_name: firstname,last_name: lastname,role_id });
      } catch (error) {
        console.error( "error is",error.response.data);
        throw error;
      }
    },
    
    logout() {
      this.token = null;
      localStorage.removeItem('token');
    }
  }
});
