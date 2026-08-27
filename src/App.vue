<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
  <Analytics />
</template>

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue'
import { RouterView } from 'vue-router'
import AppLayout from './layouts/AppLayout.vue'
</script>
