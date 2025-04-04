<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import SvgSprite from '@/components/shared/SvgSprite.vue';
// import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3';

// Router & reCAPTCHA
const router = useRouter();
// const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

// Form State
const email = ref('midhun@gmail.com');
const password = ref('111');
const showPassword = ref(false);
const errorMsg = ref('');
const checkbox = ref(false);
const valid = ref(false);

// Validation Rules
const emailRules = [
  (v) => !!v.trim() || 'E-mail is required',
  (v) => /.+@.+\..+/.test(v.trim()) || 'E-mail must be valid',
];

const passwordRules = [
  (v) => !!v || 'Password is required',
  // (v) => v.trim().length >= 6 || 'Password must be at least 6 characters',
];

// Handle reCAPTCHA
// const recaptcha = async () => {
//   await recaptchaLoaded();
//   return await executeRecaptcha('login');
// };

// Handle Login
const login = async () => {
  try {
    // await recaptcha(); // Ensure reCAPTCHA runs
    const response = await axios.post('http://localhost:3000/auth/login', {
      email: email.value,
      password: password.value,
    });

    // Store Token and Redirect
    localStorage.setItem('token', response.data.accessToken);
    router.push('/dashboard');
  } catch (error) {
    errorMsg.value = error.response?.data?.message || 'Login failed';
  }
};
</script>

<template>
  <div class="d-flex justify-space-between align-center mt-4">
    <h3 class="text-h3 text-center mb-0">Login</h3>
    <router-link to="/register" class="text-primary text-decoration-none">
      Don't have an account?
    </router-link>
  </div>

  <v-form @submit.prevent="login" class="mt-7 loginForm">
    <div class="mb-6">
      <v-label>Email Address</v-label>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        class="mt-2"
        density="comfortable"
        required
        hide-details="auto"
        variant="outlined"
        color="primary"
      />
    </div>

    <div>
      <v-label>Password</v-label>
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        required
        variant="outlined"
        density="comfortable"
        color="primary"
        hide-details="auto"
        :type="showPassword ? 'text' : 'password'"
        class="pwdInput mt-2"
      >
        <template v-slot:append-inner>
          <v-btn color="secondary" icon rounded variant="text" @click="showPassword = !showPassword">
            <SvgSprite :name="showPassword ? 'custom-eye' : 'custom-eye-invisible'" style="width: 20px; height: 20px" />
          </v-btn>
        </template>
      </v-text-field>
    </div>

    <div class="d-flex align-center mt-4 mb-7 mb-sm-0">
      <v-checkbox v-model="checkbox" label="Keep me signed in" color="primary" class="ms-n2" hide-details />
      <div class="ms-auto">
        <router-link to="/forgot-pwd1" class="text-darkText link-hover">Forgot Password?</router-link>
      </div>
    </div>

    <v-btn color="primary" block class="mt-5" variant="flat" size="large" rounded="md" :disabled="valid" type="submit">
      Login
    </v-btn>

    <div v-if="errorMsg" class="mt-2">
      <v-alert color="error">{{ errorMsg }}</v-alert>
    </div>
  </v-form>
</template>

<style lang="scss">
.pwdInput {
  position: relative;
}

.text-primary {
  color: #1976d2 !important;
}
</style>
