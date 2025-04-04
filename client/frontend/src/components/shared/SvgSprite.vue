<script setup lang="ts">
const props = defineProps<{ name: string }>();

const spritePath = import.meta.env.BASE_URL + 'assets/svg/sprite.svg';
</script>

<template>
  <svg class="pc-icon">
    <use :xlink:href="`${spritePath}#${props.name}`"></use>
  </svg>
</template>
