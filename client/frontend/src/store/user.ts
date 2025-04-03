import { defineStore } from 'pinia';
import axios from 'axios';

export const useUsersStore = defineStore('users', {
  state: () => ({ users: [] }),
  actions: {
    async fetchUsers() {
      try {
        const response = await axios.get('http://localhost:3000/user/users', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async updateUser(userId, updatedData) {
      try {
        await axios.put(`http://localhost:3000/user/users/${userId}`, updatedData, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        this.fetchUsers();
      } catch (error) {
        console.error('Error updating user:', error);
      }
    },
  },
});
