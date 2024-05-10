<script lang="ts" setup>
defineProps<{
  link: string;
  text: string;
}>();
</script>

<template>
  <img :src="link" :alt="text || 'img'" />
</template>

<style lang="scss" scoped>
.img {
  @apply rounded shadow;
}
</style>
