<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import ProductCard from '@/components/ProductCard.vue'
import SellBanner from '@/components/SellBanner.vue'

const products = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers?populate[0]=pictures&populate[1]=owner.avatar',
    )
    products.value = data.data
  } catch (error) {
    console.log(error.message)
  }
})
</script>

<template>
  <main class="container">
    <p v-if="products.length === 0">Chargement en cours...</p>
    <div v-else>
      <h1>Des millions de petites annonces et autant d'occasions de se faire plaisir</h1>
      <SellBanner />
      <section class="home-product">
        <ProductCard :products="products" />
      </section>
    </div>
  </main>
</template>

<style scoped>
.container {
  height: calc(100vh - var(--header-height));
  display: flex;
  justify-content: center;
}

h1 {
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 25px;
}

.home-product {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-top: 25px;
}
</style>
