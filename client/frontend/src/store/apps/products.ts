import { defineStore } from 'pinia';
import axios from 'axios';

export const useProducts = defineStore('products', {
  state: () => ({
    products: []
  }),
  getters: {
    getProducts: (state) => state.products
  },
  actions: {
    async fetchProducts() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/product/products', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        this.products = response.data.map((product: any) => ({
          id: product.product_id,
          name: product.product_name,
          category: product.hsn_sac_code,
          price: product.retail_price,
          date: '2025-04-01', // Hardcoded for now; update if your DB has it
          qty: product.stock_quantity
        }));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  }
});
