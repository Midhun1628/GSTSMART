<script setup lang="ts">
import { computed } from 'vue';
import { useCustomizerStore } from '@/stores/customizer';
// assets
import imageElement from '@/assets/images/landing/figma-light.png';
import imageDark from '@/assets/images/landing/figma-dark.png';

const customizer = useCustomizerStore();

const dark = computed(() => {
  if (customizer.actTheme === 'dark') {
    return true;
  } else {
    return false;
  }
});
</script>

<template>
  <div class="spacer pt-0">
    <v-container class="maxWidth">
      <v-row class="justify-center">
        <v-col md="6" cols="12">
          <div class="text-center">
            <h2 class="text-h2 mb-sm-4 mb-2">The Ultimate Figma Design System for Effortless Productivity</h2>
            <p class="text-h6 mb-0">
              Simplify your design process with Auto Layout, components, variables, and global styles—all in one powerful Figma system.
            </p>
          </div>
        </v-col>
        <v-col xl="10" md="8" sm="10" cols="10" class="pb-0">
          <v-img v-if="dark" :src="imageDark" alt="figma" />
          <v-img v-else :src="imageElement" alt="figma" />
          <div class="d-flex justify-center ga-2 mt-6">
            <v-btn color="primary" variant="outlined" href="https://codedthemes.com/item/able-pro-free-figma-ui-kit/" target="_">
              Free Figma
            </v-btn>
            <v-btn color="primary" variant="flat" href="https://codedthemes.com/item/able-pro-figma-ui-kit/" target="_"> Buy Figma </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
