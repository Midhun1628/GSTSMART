<script setup lang="ts">
import SvgSprite from '@/components/shared/SvgSprite.vue';
import { useIspValue } from '@/utils/useIspValue';
import Logo from '@/views/pages/landingpage/Components/LogoMain.vue';
import { useDisplay } from 'vuetify';

const { mdAndUp } = useDisplay();

defineEmits(['sToggle']);

const { ispValue } = useIspValue();
</script>

<template>
  <v-app-bar elevation="0" flat height="69" class="app-header border-bottom position-fixed" color="containerBg" border="0">
    <v-container class="fill-height maxWidth">
      <div class="d-flex align-center ga-2 w-100">
        <Logo />
        <!---/Search part -->
        <v-spacer />
        <!-- ---------------------------------------------- -->
        <!---right part -->
        <!-- ---------------------------------------------- -->
        <template v-if="mdAndUp">
          <v-btn variant="text" class="font-weight-medium" to="/dashboard/default" target="_">Dashboard</v-btn>
          <v-btn variant="text" class="font-weight-medium" color="primary" to="/components/buttons">Components</v-btn>
          <v-btn variant="text" class="font-weight-medium" href="https://phoenixcoded.gitbook.io/able-pro" target="_">Documentation</v-btn>
          <v-btn
            icon
            variant="tonal"
            target="_"
            aria-label="github link"
            href="https://github.com/phoenixcoded/able-pro-free-admin-dashboard-template"
          >
            <SvgSprite name="custom-github-outline" style="width: 20px; height: 20px" />
          </v-btn>
          <v-btn
            variant="flat"
            class="font-weight-medium ms-4"
            height="42px"
            color="success"
            rounded="md"
            :href="ispValue ? 'https://1.envato.market/B0JAPW' : 'https://1.envato.market/zNkqj6'"
            target="_"
          >
            <template v-slot:prepend>
              <SvgSprite name="custom-link2" style="width: 20px; height: 20px" />
            </template>
            Purchase Now
          </v-btn>
          <v-btn icon rounded="sm" variant="text" size="small" class="d-lg-none d-md-block" @click="$emit('sToggle')">
            <SvgSprite name="custom-menu-outline" style="width: 20px; height: 20px" />
          </v-btn>
        </template>
        <template v-else>
          <v-btn variant="outlined" color="warning" rounded="md" to="/dashboard/default" target="_">Dashboard</v-btn>
          <v-btn icon rounded="sm" variant="text" size="small" @click="$emit('sToggle')">
            <SvgSprite name="custom-menu-outline" style="width: 20px; height: 20px" />
          </v-btn>
        </template>
      </div>
    </v-container>
  </v-app-bar>
</template>
