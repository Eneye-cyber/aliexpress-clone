<template>
  <div class="w-full fixed z-50">
    <TopBar />
    <Header />
  </div>

  <div class="lg:pt-[150px] md:pt-[130px] pt-[80px]" />
  <Loading  v-if="userStore.isLoading" />
  <slot />

  <Footer v-if="!userStore.isLoading" />
</template>
<script setup>
import { useUserStore } from '~/stores/user';
  const userStore = useUserStore()
</script>