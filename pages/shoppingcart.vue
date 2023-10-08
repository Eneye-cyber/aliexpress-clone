<template>
  <div class="mt-4 max-w-[1200px] mx-auto px-2">
    <div v-if="false" class="flex items-center justify-center h-[500px]">
      <div class="">
        <img src="/img/cart-empty.png" width="250" alt="empty">

        <p class="text-xl text-center mt-4">No items yet?</p>
        <div class="flex text-center">
          <nuxt-link to="/auth"
          class="w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4 bg-[#fd374f]">
          Sign in</nuxt-link>
        </div>
      </div>
    </div>

    <div class="md:flex gap-4 justify-between mx-auto w-full">
      <div class="md:w-[65%]">
        <div class="bg-white rounded-lg p-4">
          <h3 class="text-2xl font-bold mb-2">Shopping Cart (0)</h3>
        </div>

        <div class="bg-[#FEEEEF] rounded-lg p-4 mt-4">
          <p class="text-red-500 font-bold">Welcome Deal applicable on 1 item only</p>
        </div>

        <div id="Items" class="bg-white rounded-lg p-4 mt-4">
          <div v-for="(product, index) in products" :key="index">
            <CartItem :product="product" :selectedArray="selectedArray" @selectedRadio="selectedRadioFunc" />
          </div>
        </div>
      </div>

      <div class="md:hidden block my-4"/>
      <div class="md:w-[35%]">
        <div id="Summary" class="bg-white rounded-lg p-4">
          <div class="text-2xl font-extrabold mb-2">Summary</div>
          <div class="flex items-center justify-between my-4">
            <div class="font-semibold">Total</div>
            <div class="text-2xl font-semibold">
              $ <span class="font-extrabold">{{ totalPriceComputed }}</span>
            </div>
          </div>
          <button @click="goToCheckout"
            class="flex items-center justify-center bg-[#FD374F] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4">
              Checkout
          </button>
        </div>

        <div id="PaymentProtection" class="bg-white rounded-lg p-4 mt-4">
          <h5 class="text-lg font-semibold mb-2">Payment methods</h5>
          <div class="flex items-center justify-start gap-8 my-4">
              <div v-for="card in cards">
                  <img class="h-6" :src="`img/${card}`">
              </div>
          </div>

          <div class="border-b"/>

          <h5 class="text-lg font-semibold mb-2 mt-2">Buyer Protection</h5>
          <p class="my-2">
              Get full refund if the item is not as described or if is not delivered
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useUserStore } from '~/stores/user';
  definePageMeta({
    layout: "main-layout",
  });
  const store = useUserStore()
  const products = store.cart;

  let selectedArray = ref([])

  const selectedRadioFunc = (e) => {
    if(!selectedArray.value.length) return selectedArray.value.push(e)

    let index = selectedArray.value.findIndex((val) => val.id === e.id)
    index === -1 ? selectedArray.value.push(e) : selectedArray.value.splice(index, 1)
  }

  const goToCheckout = () => {
    let ids = []
    store.checkout = []
    selectedArray.value.forEach(item => ids.push(item.id))
    let res = store.cart.filter((item) => {
      return ids.indexOf(item.id) != -1
    })

    res.forEach(item => store.checkout.push(toRaw(item)))
    return navigateTo('/checkout')
  }
  const cards = ref([
    'visa.png',
    'mastercard.png',
    'paypal.png',
    'applepay.png'
  ])

  const totalPriceComputed = computed(() => store.cart.reduce((acc,val) => acc += val.price, 0) / 100)

</script>