<template>
  <div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
    <div class="md:flex gap-4 justify-between mx-auto w-full">
      <div class="md:w-[40%]">
        <img v-if="currentImage" class="rounded-lg object-fit" :src="currentImage" :alt="`${product?.data?.title}`">
        <div v-if="!!images && !!images.length" class="flex items-center justify-center mt-2">
          <div v-for="image in images">
            <img :src="image" :class="currentImage === image ? 'border-[#FF5353]' : ''" 
            :alt="`${product?.data?.title}`" width="70" class="rounded-md object-fit border-[3px]" @click="currentImage = image"
            @mouseover="currentImage = image">
          </div>
        </div>
      </div>
      
      <div class="md:w-[60%] bg-white p-3 rounded-lg">
        <div>
          <p class="mb-2">{{ product?.data?.title }}</p>
          <p class="font-light text-[12px] mb-2">{{ product?.data?.description }}</p>
        </div>

        <div class="flex items-center pt-1.5">
          <span class="h-4 min-w-4 rounded-full p-0.5 bg-[#FFD000] mr-2">
            <Icon name="material-symbols:star-rounded" class="-mt-[17px]" size="12" />
          </span>
          <p class="text-[#FF5353]">Extra 5% off</p>
        </div>

        <div class="flex items-center justify-start my-2">
          <Icon name="material-symbols:star-rounded" color="#FF5353" />
          <Icon name="material-symbols:star-rounded" color="#FF5353" />
          <Icon name="material-symbols:star-rounded" color="#FF5353" />
          <Icon name="material-symbols:star-rounded" color="#FF5353" />
          <Icon name="material-symbols:star-rounded" color="#FF5353" />
          <span class="font-light ml-2 text-[13px]">5 213 Reviews 1, 000+ orders</span>
        </div>

        <div class="border-b"></div>

        <div class="flex items-center justify-start gap-2 my-2">
          <div class="text-xl font-bold">$ {{ priceComputed }}</div>
          <span class="border font-semibold bg-[#F5f5f5] text-[#c08562] text-[9px] px-1.5 rounded-sm">70% off</span>
        </div>
        <p class="text-xs font-semibold pt-1 text-[#009a66]">Free 11-day delivery over $8. 28</p>
        <p class="text-xs font-semibold pt-1 text-[#009a66]">Free Shipping</p>

        <div class="pt-2">
          <button @click="addToCart" :disabled="isInCart"
          class="px-6 py-2 rounded-lg text-white text-lg text-semibold bg-gradient-to-r from-[#ff851a] to-[#ffac2c]"
          >
          {{ isInCart ? 'Is Added' : 'Add to Cart' }}
        </button>
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
const route = useRoute()

// const [ product ] = store.getProducts.filter((val) => val.id === JSON.parse(route.params.id))
let product = ref(null)
let currentImage = ref(null)

onBeforeMount(async () => {
  product.value = await useFetch(`/api/prisma/get-product-by-id/${route.params.id}`)
}),

watchEffect(() => {
  if(!!product.value && !!product.value.data) {
    currentImage.value = product.value.data.url
    store.isloading = false
    images.value[0] = currentImage.value
  }
}) 

const isInCart = computed(() => !!store.cart.find((prod) => JSON.parse(route.params.id) === prod.id))
const priceComputed = computed(() => product?.value?.data?.price / 100)

const images = ref([
  '',
  `https://picsum.photos/id/${genRand(10, 100)}/800/800`,
  `https://picsum.photos/id/${genRand(10, 100)}/800/800`,
  `https://picsum.photos/id/${genRand(10, 100)}/800/800`,
  `https://picsum.photos/id/${genRand(10, 100)}/800/800`,
  `https://picsum.photos/id/${genRand(10, 100)}/800/800`,
])

const addToCart = () => {
  console.log(addToCart)
}

</script>
