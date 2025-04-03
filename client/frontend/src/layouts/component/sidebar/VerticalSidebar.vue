<script setup lang="ts">
import { ref, shallowRef, computed } from 'vue';
import { useRoute } from 'vue-router';
import sidebarItems from './sidebarItem';
import SvgSprite from '../../../components/shared/SvgSprite.vue'
import NavTitle from './NavTitle.vue';
import NavItem from './NavItem.vue';

const originalSidebarMenu = shallowRef(sidebarItems);
const searchValue = ref('');
const route = useRoute(); // Get current route

console.log("Current Route:", route.path); // DEBUG: Check if route is correct

const sidebarMenu = computed(() => {
  return originalSidebarMenu.value.filter((item) => {
    if (item && item.title) {
      return item.title.toLowerCase().includes(searchValue.value.toLowerCase());
    } else if (item && item.header) {
      return item.header.toLowerCase().includes(searchValue.value.toLowerCase());
    }
    return false;
  });
});

// Check if sidebar should be hidden
const hideSidebar = computed(() => {
  console.log("Current route:", route.path);
  return ['/login', '/register'].includes(route.path);
});

console.log("Hide Sidebar?", hideSidebar.value); // DEBUG: Check if hiding sidebar
</script>


<template>
  <v-navigation-drawer left app width="279" class="leftSidebar">
    <div class="pa-5">
      <Logo />
    </div>
    <perfect-scrollbar class="scrollnavbar">
      <v-list class="px-2">
        <template v-for="(item, i) in sidebarMenu" :key="i">
          <NavItem :item="item" />
        </template>
      </v-list>
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>
