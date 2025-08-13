<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const props = defineProps({
  id: {
    required: true,
  },
})

const offerInfos = ref({})

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers/${props.id}?populate[0]=pictures&populate[1]=owner.avatar`,
    )
    offerInfos.value = data.data
  } catch (error) {
    console.log(error.message)
  }
})
</script>

<template>
  <main class="container">
    <p v-if="!offerInfos.id">Chargement en cours...</p>
    <section v-else>
      <div class="offerInfo">
        <div class="caroussel">
          <img
            :src="offerInfos.attributes.pictures.data[0].attributes.url"
            :alt="offerInfos.attributes.title"
            class="offerImg"
          />
        </div>
        <h2>{{ offerInfos.attributes.title }}</h2>
        <p class="price">{{ offerInfos.attributes.price }} €</p>
        <p class="date">{{ offerInfos.attributes.createdAt }}</p>
        <div class="description">
          <p>Description</p>
          <p>{{ offerInfos.attributes.description }}</p>
        </div>
        <div class="localisation">
          <p><font-awesome-icon :icon="['fas', 'location-arrow']" />Reims (51100)</p>
        </div>
      </div>

      <div class="userInfo">
        <div>
          <img
            :src="offerInfos.attributes.owner.data.attributes.avatar.data.attributes.url"
            alt=""
            v-if="offerInfos.attributes.owner.data.attributes.avatar.data"
            class="userImg"
          />
          <p>{{ offerInfos.attributes.owner.data.attributes.username }}</p>
        </div>
        <span v-if="offerInfos.attributes.owner.data.attributes.confirmed">
          <font-awesome-icon :icon="['fas', 'check-double']" /> Pièce d'identité vérifiée
        </span>
        <p>
          <font-awesome-icon :icon="['far', 'clock']" />
          Répond généralement en 1 heure
        </p>
        <div>
          <button>Acheter</button>
          <button>Message</button>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
}

section {
  display: flex;
  width: 100%;
}

.offerInfo {
  width: 67%;
}

.userInfo {
  width: 33%;
}

.caroussel {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.offerInfo img {
  height: 350px;
}

h2 {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
}

.price {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}

.date {
  font-size: 12px;
  color: var(--grey);
  margin-bottom: 30px;
}

.description,
.localisation {
  border-top: 1px solid var(--grey-med);
  padding: 20px 0 40px 0;
}

.description p:first-child {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
