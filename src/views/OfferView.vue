<script setup>
import axios from 'axios'
import { onMounted, ref, computed } from 'vue'
import { priceFormat } from '@/assets/utils/priceFormat'
import { useCycleList } from '@vueuse/core'

const props = defineProps({
  id: {
    required: true,
  },
})

const offerInfos = ref({})

const cyclelist = computed(() => {
  if (offerInfos.value.attributes.pictures.data) {
    const { state, next, prev } = useCycleList(offerInfos.value.attributes.pictures.data)
    return { state, next, prev }
  } else {
    return {}
  }
})

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

const dateFormat = computed(() => {
  return offerInfos.value.attributes.updatedAt.split('T')[0].split('-').reverse().join('/')
})
</script>

<template>
  <main class="container">
    <p v-if="!offerInfos.id" class="loader">Chargement en cours...</p>
    <section v-else>
      <div class="offerInfo">
        <div class="caroussel">
          <font-awesome-icon
            :icon="['fas', 'chevron-left']"
            class="left"
            @click="cyclelist.prev()"
            v-if="offerInfos.attributes.pictures.data?.length > 1"
          />
          <img
            v-if="cyclelist.state"
            :src="cyclelist.state.value.attributes.url"
            :alt="offerInfos.attributes.title"
            class="offerImg"
          />
          <font-awesome-icon
            :icon="['fas', 'chevron-right']"
            class="right"
            @click="cyclelist.next()"
            v-if="offerInfos.attributes.pictures.data?.length > 1"
          />
        </div>
        <h2>{{ offerInfos.attributes.title }}</h2>
        <p class="price">{{ priceFormat(offerInfos.attributes.price) }} €</p>
        <p class="date">{{ dateFormat }}</p>
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
        <p class="responseTime">
          <font-awesome-icon :icon="['far', 'clock']" />
          Répond généralement en 1 heure
        </p>
        <div>
          <button class="buyBtn">Acheter</button>
          <button class="msgBtn">Message</button>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* offer view container */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
}

/* offer section size and display */
section {
  display: flex;
  width: 100%;
  gap: 30px;
}

/* offer info part size */
.offerInfo {
  width: 67%;
}

/* user info part size */
.userInfo {
  width: 33%;
}

/* style and size for  img caroussel */
.caroussel {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
  user-select: none;
}

/* left and right btn for carrousel */

.caroussel .left {
  position: absolute;
  left: 0;
}

.caroussel .right {
  position: absolute;
  right: 0;
}

.caroussel svg {
  transition: 0.1s ease-in-out;
}

.caroussel svg:hover {
  cursor: pointer;
  transform: scale(1.5);
}

/* offer img size */
.offerInfo img {
  height: 350px;
}

/* offer title  */
h2 {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* offer price */
.price {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}

/* offer date */
.date {
  font-size: 12px;
  color: var(--grey);
  margin-bottom: 30px;
}

/* descript & localisation border top and style */
.description,
.localisation {
  border-top: 1px solid var(--grey-med);
  padding: 20px 0 40px 0;
}

/* gap between icon et localisation */
.localisation p {
  display: flex;
  gap: 5px;
  align-items: center;
}

/* description text style */
.description p:first-child {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* userinfo display border */
.userInfo {
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid var(--grey-med);
  height: fit-content;
  padding: 15px;
  box-shadow: 0 0 3px var(--grey-med);
}

/* user info display name and img */
.userInfo > div:first-child {
  display: flex;
  gap: 10px;
}

/* user img size */
.userInfo img {
  max-width: 50px;
  max-height: 50px;
  border-radius: 100%;
}

/* user name style */
.userInfo > div:first-child p {
  font-weight: bold;
}

/* verified style */
.userInfo span {
  background-color: var(--orange-pale);
  width: fit-content;
  padding: 4px 8px;
  display: flex;
  gap: 5px;
  color: var(--brown);
  font-size: 14px;
  border-radius: 10px;
}

/* response time style */
.responseTime {
  display: flex;
  gap: 5px;
  font-size: 15px;
  margin-bottom: 40px;
}

/* user info button display */
.userInfo > div:last-child {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-top: 1px solid var(--grey-med);
  gap: 10px;
}

/* user info button base style */
.buyBtn,
.msgBtn {
  height: 50px;
  border: none;
  color: white;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
}

/* buy and message btn color */
.buyBtn {
  background-color: var(--orange);
}

.msgBtn {
  background-color: var(--blue-dark);
}
</style>
