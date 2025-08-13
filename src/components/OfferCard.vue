<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  offers: {
    type: Object,
    required: true,
  },
})
console.log(props.offers)
</script>

<template>
  <RouterLink :to="{ name: 'home' }">
    <div class="userOfferInfo">
      <img
        :src="offers.owner.data.attributes.avatar.data.attributes.url"
        alt=""
        v-if="offers.owner.data.attributes.avatar.data"
        class="userImg"
      />
      <p>{{ offers.owner.data.attributes.username }}</p>
    </div>
    <img :src="offers.pictures.data[0].attributes.url" :alt="offers.title" class="offerImg" />
    <p class="title">{{ offers.title }}</p>
    <p class="price">{{ offers.price }} €</p>
    <font-awesome-icon :icon="['far', 'heart']" />
    <span>{{ offers.createdAt }}</span>
  </RouterLink>
</template>

<style scoped>
/* card position, display and size */
a {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc(100% / 5 - 20px);
  height: 380px;
  position: relative;
}

/* offer user info (avatar + name) */
.userOfferInfo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
}

.userImg {
  width: 25px;
  height: 25px;
  border-radius: 100%;
}

/* offer image */
.offerImg {
  width: 100%;
  min-height: 240px;
  max-height: 240px;
  object-position: center;
  object-fit: cover;
  border-radius: 10px;
}

/* offer title & price */
.title,
.price {
  font-weight: bold;
}

/* heart icon */
svg {
  position: absolute;
  bottom: 0;
  right: 0;
  color: var(--grey);
  font-size: 20px;
}

/* offer date */
span {
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 7px;
}
</style>
