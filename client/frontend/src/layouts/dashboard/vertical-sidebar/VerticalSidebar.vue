<script setup lang="ts">
import { shallowRef } from 'vue';
import { useCustomizerStore } from '../../../store/customizer';
import sidebarItems from './sidebarItem';
import NavItem from './NavItem/NavItem.vue';
import Logo from '../logo/LogoMain.vue';

const customizer = useCustomizerStore();
const sidebarMenu = shallowRef(sidebarItems);
</script>

<template>
  <v-navigation-drawer
    left
    v-model="customizer.sidebarDrawer"
    elevation="0"
    width="279"
    app
    class="leftSidebar"
    :rail="customizer.miniSidebar"
    expand-on-hover
  >
    <div class="pa-5">
      <Logo />
    </div>

    <perfect-scrollbar class="scrollnavbar" :options="{ suppressScrollX: true }">
      <v-list class="px-2">
        <template v-for="(item, i) in sidebarMenu" :key="i">
          <NavItem :item="item" />
        </template>
      </v-list>
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>