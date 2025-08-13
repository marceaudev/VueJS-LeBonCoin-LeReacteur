<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import OfferCard from '@/components/OfferCard.vue'
import SellBanner from '@/components/SellBanner.vue'

const offersList = ref({})

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers?populate[0]=pictures&populate[1]=owner.avatar',
    )
    offersList.value = data
  } catch (error) {
    console.log(error.message)
  }
})
</script>

<template>
  <main class="container">
    <p v-if="!offersList.data" class="loader">Chargement en cours...</p>
    <div v-else>
      <h1>Des millions de petites annonces et autant d'occasions de se faire plaisir</h1>
      <SellBanner />
      <section class="homeOffers">
        <OfferCard
          v-for="offer in offersList.data"
          :key="offer.id"
          :offers="offer.attributes"
          :id="offer.id"
        />
      </section>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
  padding-bottom: 40px;
}

h1 {
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 25px;
}

.loader {
  font-size: 32px;
  font-weight: bold;
}

.homeOffers {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-top: 25px;
}
</style>
