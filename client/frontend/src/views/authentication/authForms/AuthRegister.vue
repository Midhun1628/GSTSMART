<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../../../store/auth.js';
import { useRouter } from 'vue-router';
import SvgSprite from '../../../components/shared/SvgSprite.vue'

const authStore = useAuthStore();
const router = useRouter();

const firstname = ref('');
const lastname = ref('');
const email = ref('');
const username = ref('');
const password = ref('');
const showPassword = ref(false);
const errorMessage = ref('');
const Regform = ref();
const role_id=ref(2)

// Validation Rules
const nameRules = ref([(v: string) => !!v || 'This field is required']);
const emailRules = ref([
  (v: string) => !!v.trim() || 'E-mail is required',
  (v: string) => /.+@.+\..+/.test(v.trim()) || 'E-mail must be valid'
]);
const usernameRules = ref([(v: string) => !!v || 'Username is required']);
const passwordRules = ref([
  (v: string) => !!v || 'Password is required',
  // (v: string) => v.length <= 10 || 'Password must be less than 10 characters'
]);

const register = async () => {

    try {
      await authStore.register (username.value, email.value ,password.value,firstname.value,lastname.value,role_id.value);

      router.push('/login');
    } catch (error) {
      errorMessage.value = error.message || "registration failed" ; 
    }
  
};
</script>

<template>
  <div class="d-flex justify-space-between align-center">
    <h3 class="text-h3 text-center mb-0">Sign up</h3>
    <router-link to="/login" class="text-primary text-decoration-none">Already have an account?</router-link>
  </div>
  <v-form ref="Regform" lazy-validation class="mt-7 loginForm">
    <v-row>
      <v-col cols="12" sm="6">
        <v-label>First Name*</v-label>
        <v-text-field v-model="firstname" :rules="nameRules" variant="outlined" color="primary" placeholder="John"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-label>Last Name*</v-label>
        <v-text-field v-model="lastname" :rules="nameRules" variant="outlined" color="primary" placeholder="Doe"></v-text-field>
      </v-col>
    </v-row>
    <div class="mb-6">
      <v-label>Username*</v-label>
      <v-text-field v-model="username" :rules="usernameRules" variant="outlined" color="primary" placeholder="Enter your username"></v-text-field>
    </div>
    <div class="mb-6">
      <v-label>Email Address*</v-label>
      <v-text-field v-model="email" :rules="emailRules" variant="outlined" color="primary" placeholder="demo@company.com"></v-text-field>
    </div>
    <div class="mb-6">
      <v-label>Password</v-label>
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        variant="outlined"
        color="primary"
        :type="showPassword ? 'text' : 'password'"
        class="pwdInput"
      >
        <template v-slot:append-inner>
          <v-btn icon variant="text" @click="showPassword = !showPassword">
            <SvgSprite :name="showPassword ? 'custom-eye' : 'custom-eye-invisible'" />
          </v-btn>
        </template>
      </v-text-field>
    </div>

    <p v-if="errorMessage" class="text-error">{{ errorMessage }}</p>

    <div class="d-sm-inline-flex align-center mt-2 mb-7 font-weight-bold">
      <h6 class="text-caption">
        By Signing up, you agree to our
        <router-link to="/privacy-policy" class="text-primary">Terms of Service</router-link> and
        <router-link to="/privacy-policy" class="text-primary">Privacy Policy</router-link>.
      </h6>
    </div>
    <v-btn color="primary" block class="mt-4" variant="flat" rounded="md" size="large" @click="register">Create Account</v-btn>
  </v-form>
</template>
