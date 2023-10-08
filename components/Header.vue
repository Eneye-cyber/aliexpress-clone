<template>
  <div id="MainHeader" class="w-full bg-white flex items-center">
    <div class="flex lg:justify-start items-center justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto">
      <nuxt-link to="/" class="min-w-[170px]">
        <img width="170" src="/img/AliExpress-logo.png" />
      </nuxt-link>

      <div class="max-w-[700px] w-full md:block hidden">
        <div class="relative">
          <!-- Search input  -->
          <div class="flex items-center border-2 border-[#ff4646] rounded-md w-full">
            <input class="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none"
             placeholder="kitchen accessories" type="text" v-model="searchItem"/>
            <Icon v-if="isSearching" name="eos-icons:loading" size="25" class="mr-2"/>
            <button class="flex items-center h-[100%] p-1.5 px-2 bg-[#ff4646]">
              <Icon name="ph:magnifying-glass" size="20" color="#ffffff"></Icon>
            </button>
          </div>
          <!-- Search Dropdown  -->
          <div v-if="!!searchItem" class="absolute bg-white max-w-[700px] h-auto w-full">
            <div class="p-2">
              <nuxt-link to="`/item/1`" class="w-full flex items-center justify-between cursor-pointer hover:bg-gray-100">
                <div class="flex items-center">
                  <img class="rounded-md" width="40" src="https://picsum.photos/id/82/300/320" />
                  <div class="truncate ml-2">TESTING</div>
                </div>
                <div class="truncate">$ 98.99</div>
              </nuxt-link>

            </div>
          </div>
        </div>
      </div>

      <nuxt-link to="/shoppingcart" class="flex items-center">
        <button class="relative md:block hidden" @mouseenter="isCartHover = true" @mouseleave="isCartHover = false">
          <span class="absolute flex items-center justify-center -right-[3px] top-0 bg-[#ff4646] h-[17px] min-w-[17px] text-xs text-white px-0.5 rounded-full">
            0
          </span>
          <div class="min-width-[40px]">
            <Icon name="ph:shopping-cart-simple-light" size="33" :color="isCartHover ? '#ff4646' : ''" />
          </div>
        </button>
      </nuxt-link>

      <button @click="userStore.isMenuOverlay = true" class="md:hidden block rounded-full p-1.5 -mt-[4px] hover:bg-gray-200">
        <Icon name="radix-icons:hamburger-menu" size="33" />
      </button>
    </div>
  </div>
</template>
<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()
let searchItem = ref('')
let isSearching =  ref(false)
let isCartHover =  ref(false)
</script>