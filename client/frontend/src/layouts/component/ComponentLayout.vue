<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { RouterView } from 'vue-router';
import { useDisplay } from 'vuetify';

import VerticalSidebar from './sidebar/VerticalSidebar.vue';
import AppBarMenu from './AppBarMenu.vue';
import LoaderWrapper from '../../layouts/dashboard/LoaderWrapper.vue';
import Customizer from '../../layouts/dashboard/customizer/CustomizerPanel.vue';
import { useCustomizerStore } from '../../store/customizer';
import { DirAttrSet } from '../../utils/utils';
const customizer = useCustomizerStore();

const { lgAndUp } = useDisplay();
const toggleSide = ref(false);

// Set the initial direction attribute when the component is mounted
onMounted(() => {
  DirAttrSet(customizer.isRtl ? 'rtl' : 'ltr');
});

// Watch for changes in the isRtl property and update the direction attribute accordingly
watch(
  () => customizer.isRtl,
  (newValue) => {
    DirAttrSet(newValue ? 'rtl' : 'ltr');
  }
);
</script>

<template>
  <v-locale-provider :rtl="customizer.isRtl">
    <v-app :theme="customizer.actTheme" class="component-wrapper">
      <Customizer />
      <AppBarMenu />
      <v-main class="page-wrapper">
        <v-container>
          <v-row class="mt-lg-8 mb-0">
            <!-- Always show Sidebar -->
            <v-col lg="3">
              <VerticalSidebar />
            </v-col>
            <v-col lg="9">
              <!-- Main Content -->
              <LoaderWrapper />
              <RouterView />
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>

