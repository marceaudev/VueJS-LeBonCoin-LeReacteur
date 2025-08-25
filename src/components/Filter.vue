<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'

const props = defineProps(['pricemin', 'pricemax', 'sort'])

const pricemin = ref(props.pricemin)
const pricemax = ref(props.pricemax)
const sort = ref('')

const route = useRoute()
const router = useRouter()

const handleSubmit = () => {
  const queries = { ...route.query }

  if (pricemin.value) {
    queries.pricemin = pricemin.value
  } else {
    delete queries.pricemin
  }
  if (pricemax.value) {
    queries.pricemax = pricemax.value
  } else {
    delete queries.pricemax
  }
  if (sort.value) {
    queries.sort = sort.value
  } else {
    delete queries.sort
  }
  queries.page = 1
  router.push({ name: 'home', query: queries })
}
</script>

<template>
  <form class="filter" @submit.prevent="handleSubmit">
    <div>
      <p>Prix</p>
      <div>
        <input type="number" name="min" id="min" v-model="pricemin" min="0" />
        <input type="number" name="max" id="max" v-model="pricemax" :min="pricemin" />
      </div>
    </div>
    <div>
      <p>Tri</p>
      <div>
        <label>
          Prix croissants
          <input type="radio" name="asc" id="asc" value="price:asc" v-model="sort" />
        </label>
        <label>
          Prix décroissants
          <input type="radio" name="desc" id="desc" value="price:desc" v-model="sort" />
        </label>
        <label>
          Pas de tri
          <input type="radio" name="nofilter" id="nofilter" value="" v-model="sort" />
        </label>
      </div>
    </div>
    <button>Rechercher</button>
  </form>
</template>

<style scoped>
.filter {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
