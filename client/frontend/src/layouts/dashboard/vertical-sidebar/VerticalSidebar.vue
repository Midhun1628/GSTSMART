<script setup lang="ts">
import { shallowRef, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useCustomizerStore } from '../../../stores/customizer';
import sidebarItems from './sidebarItem';

import NavGroup from './NavGroup/NavGroup.vue';
import NavItem from './NavItem/NavItem.vue';
import ExtraBox from './extrabox/ExtraBox.vue';
import Logo from '../logo/LogoMain.vue';

const customizer = useCustomizerStore();
const sidebarMenu = shallowRef(sidebarItems);
const route = useRoute();

// Get user authentication status (Replace this with your actual auth logic)
const isLoggedIn = computed(() => !!localStorage.getItem('token'));

// Hide sidebar if user is not logged in or is on login/register pages
const showSidebar = computed(() => {
  return isLoggedIn.value && !['/login', '/register'].includes(route.path);
});
</script>

<template>
  <v-navigation-drawer
    v-if="showSidebar"
    v-model="customizer.sidebarDrawer"
    left
    elevation="0"
    rail-width="90"
    mobile-breakpoint="lg"
    width="279"
    app
    class="leftSidebar"
    :rail="customizer.miniSidebar"
    expand-on-hover
  >
    <!---Logo part -->
    <div class="pa-5">
      <Logo />
    </div>
    
    <!-- Sidebar Menu -->
    <perfect-scrollbar class="scrollnavbar" :options="{ suppressScrollX: true }">
      <v-list class="px-2">
        <template v-for="(item, i) in sidebarMenu" :key="i">
          <NavGroup :item="item" v-if="item.header" />
          <v-divider class="my-3" v-else-if="item.divider" />
          <NavItem :item="item" v-else />
        </template>
      </v-list>
      <div class="pa-4">
        <ExtraBox />
      </div>
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>
