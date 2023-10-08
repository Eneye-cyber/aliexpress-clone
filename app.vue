<template>
  <div class="fixed z-[-1] bg-[#F2F2F2] w-full h-[100vh]"></div>
  <NuxtLayout>
    <NuxtPage />
    <MenuOverlay
    :class="[
        {'max-h-[100vh] transition-all duration-200 ease-in visible': userStore.isMenuOverlay },
        {'max-h-0 transition-all duration-200 ease-out invisible': !userStore.isMenuOverlay },
    ]"/>
  </NuxtLayout>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()
const route = useRoute()
let user = ref(false)

let windowWidth = ref(process.client ? window.innerWidth : '')

onMounted(() => {
  user.isLoading = false
  window.addEventListener('resize', function () {
    windowWidth.value = window.innerWidth
  });
})

watch(() => windowWidth.value, () => {
  userStore.isMenuOverlay = windowWidth.value >= 767 ? false : windowWidth.value
})

watch(() => route.fullPath, () => {
  userStore.isLoading = true
  setTimeout(() => {
    userStore.isLoading = false
  }, 1000);
})
</script>