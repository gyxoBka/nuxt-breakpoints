<template>
  <div v-if="isSmallThanMd">
    Nuxt module playground!
  </div>
</template>

<script setup lang="ts">
const bp = useBreakpoints()

const isSmallThanMd = computed(() => bp.value.sMd)

</script>
