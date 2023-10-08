<template>
  <div class="mt-4 max-w-[1200px] mx-auto pt-2">
      <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        <div v-if="!!products.length" v-for="(product, id) in products" :key="id">
          <ProductComponent :product="product" />
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
  const products = store.getProducts;

</script>