<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import axios from 'axios'
import OfferCard from '@/components/OfferCard.vue'
import SellBanner from '@/components/SellBanner.vue'
import Filter from '@/components/Filter.vue'

const offersList = ref({})

const props = defineProps(['page', 'title', 'sort', 'pricemax', 'pricemin'])

onMounted(async () => {
  watchEffect(async () => {
    try {
      let pricefilters = ''

      if (props.pricemax) {
        pricefilters += `&filters[price][$lte]=${props.pricemax}`
      }
      if (props.pricemin) {
        pricefilters += `&filters[price][$gte]=${props.pricemin}`
      }
      const { data } = await axios.get(
        `https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers?populate[0]=pictures&populate[1]=owner.avatar&filters[title][$containsi]=${props.title}${pricefilters}&pagination[page]=${props.page}&pagination[pageSize]=10&sort=${props.sort}`,
      )
      offersList.value = data
    } catch (error) {
      console.log(error.message)
    }
  })
})
</script>

<template>
  <main class="container">
    <p v-if="!offersList.data" class="loader">Chargement en cours...</p>
    <div v-else>
      <Filter :sort="sort" :pricemax="pricemax" :pricemin="pricemin" />
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
/* main container position , display and size */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
}

/* main title */
h1 {
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 25px;
}

/* offer section (for card components) */
.homeOffers {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-top: 25px;
}
</style>
