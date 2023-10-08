<template>
  <div id="MenuOverlay" class="fixed z-50 bottom-0 h-full w-full bg-white px-3">
    <div class="flex items-center justify-between py-5">
      <NuxtLink to="/" @click="userStore.isMenuOverlay = false">
        <img width="170" alt="ali" src="/img/AliExpress-logo.png">
      </NuxtLink>
      
      <button @click="userStore.isMenuOverlay = false" class="rounded-full p-1 hover:bg-gray-200">
        <Icon name="mdi:close" size="30"/>
      </button>
    </div>
    
      <div class="flex items-center justify-between pt-5">
          <ul class="w-full">
            <li v-for="(item, index) in navLinks" :key="index" @click="goTo(item.go)" :class="navlinkClass" >
                <div class=" flex items-center text-[20px] font-semibold">
                    <Icon :name="item.icon" size="33"/>
                    <span class="pl-4">{{ item.text }}</span>
                </div>
                <div v-if="item.to === 'shoppingcart'" class="flex items-center justify-center bg-[#FF4646] h-[35px] min-w-[35px] text-lg text-white rounded-full">
                  {{ userStore.cart.length }}
                </div>
            </li>

          </ul>
      </div>
  </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()
let user = ref(false)

const navLinks = [
  {to: 'orders', text: 'My Orders', icon: 'ph:pen-light'},
  {to: 'shoppingcart', text: 'Cart', icon: 'ph:shopping-cart-simple-light'},
  {to: 'user', text: user.value ? 'Sign out' : 'Sign in / Register', icon: user.value ? 'ph:sign-out-light' : 'ph:sign-in-light'},
]

const navlinkClass = 'relative flex items-center justify-between py-2.5 border-b px-3 hover:bg-gray-100 cursor-pointer'

const goTo = (url) => {
  if(!url) return;
  if(url === 'user') {
    return user.value ? signOut() : signIn()
  }
  userStore.isMenuOverlay = false
  return navigateTo(`/${url}`)
}

const signOut = () => {
  userStore.isMenuOverlay = false
  return navigateTo('/')
}

const signIn = () => {
  userStore.isMenuOverlay = false
  return navigateTo('/auth')
}
</script>
