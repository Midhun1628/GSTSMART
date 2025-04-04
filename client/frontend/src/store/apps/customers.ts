// store/apps/customers.ts
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCustomers = defineStore('customers', {
  state: () => ({
    customers: []
  }),
  getters: {
    getCustomers: (state) => state.customers
  },
  
  actions: {
    async fetchCustomers() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/user/users', {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log('Fetched users:', response.data); // ✅ Debug log
    
        this.customers = response.data.map(user => ({
          name: user.username,
          email: user.email,
          company_id: user.company_id,
          location: user.location_id,
          status: user.role_id
        }));
      } catch (error) {
        console.error('Failed to fetch users:', error); // ❌ Error log
      }
    }
    ,
    async deleteCustomer(username: string) {
      this.customers = this.customers.filter(c => c.name !== username);
      // Optionally call backend delete here
    }
  },
  
});
