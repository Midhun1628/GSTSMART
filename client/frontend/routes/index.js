import { createRouter, createWebHistory } from 'vue-router';
import Login from '../../frontend/src/views/authentication/LoginPage.vue';
import Register from '../src/views/authentication/Register.vue';
import Dashboard from '../../frontend/src/views/authentication/Dashboard.vue'
// import { useAuthStore } from '@/store/auth';

const routes = [

  { path: "/login", component: Login,
    beforeEnter: (to, from, next) => {
      const token=localStorage.getItem('token');
      if(token){
        next('/')
      }else{
        next()
      }
    }
   },
  { path: "/register", component: Register },
  { 
    path: "/", 
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      const token=localStorage.getItem('token');
      if(!token){
        next('/login')
    }else{
      next()
    }
   
  }
},
{path:"/logout", name:'logout',beforeEnter: (to, from, next) => {
  const token=localStorage.removeItem('token');
 next('/login');
 // Redirect to login page

}},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
