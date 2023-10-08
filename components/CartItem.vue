<template>
  <div :id="`CartItem${product.id}`" class="flex justify-start my-2">
    <div class="my-auto">
      <div class="flex item-center justify-start p-0.5 cursor-pointer"
      @mouseover="isHover = true" @mouseleave="isHover = false">
        <div @click="isSelected = !isSelected"
          class="flex items-center justify-center rounded-full h-[20px] w-[20px] border mr-5 ml-2"
          :class="[isHover ? 'border-[#fd374f]' : 'border-gray-300', isSelected ? 'bg-[#fd374f]' : 'bg-b' ]">
          <div class="rounded-full bg-white h-[8px] w-[8px]"></div>
        </div>
      </div>
    </div>
    <img :src="product?.url" :alt="product.title" class="rounded-md md:w-[150px] w-[90px]">

    <div class="overflow-hidden pl-2 w-full">
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center justify-between truncate">
            <span class="sm:block hidden bg-[#FD374F] text-white text-[9px] font-semibold px-1.5 rounded-sm min-w-[80px]">Welcome Deal</span>
            <div class="truncate sm:pl-2">{{ product.title }}</div>
        </div>
        <button @click="removeFromCart()" class="mx-3 sm:block hidden -mt-0.5 hover:text-red-500">
          <Icon name="material-symbols:delete-outline" size="20" />
        </button>
      </div>

      <div class="text-xl font-semibold">
        $ <span class="font-bold">{{ product.price / 100 }}</span>
      </div>

      <p class="text-[#009A66] text-xs font-semibold pt-1"> Free 11-day delivery over ￡8.28 </p>

      <p class="text-[#009A66] text-xs font-semibold pt-1">Free Shipping </p>

      <div class="flex items-center justify-end">
        <button @click="removeFromCart()" class="sm:hidden block -mt-0.5 hover:text-red-500" >
          <Icon name="material-symbols:delete-outline" size="20" />
        </button>
      </div>
  </div>
  </div>
</template>
<script setup>
import { useUserStore } from '~/stores/user';
const props = defineProps(['product', 'selectedArray'])

const userStore = useUserStore()
const { product, selectedArray } = toRefs(props)

let isHover = ref(false)
let isSelected = ref(false)

const removeFromCart = () => {
  let pos = userStore.cart.findIndex((prod) => prod.id === product.value.id)
  if(!!pos) userStore.cart.splice(pos, 1);
}

// watch(() => isSelected.value, (val) => {
//   emit('selectedRadio', { id: product.value.id, val: val})
// })
</script>