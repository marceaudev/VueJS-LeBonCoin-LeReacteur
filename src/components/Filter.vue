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
  <form class="filters" @submit.prevent="handleSubmit">
    <div class="pricePart">
      <p>Prix</p>

      <div>
        <div>
          <input
            type="number"
            name="pricemin"
            id="pricemin"
            placeholder="Minimum"
            min="0"
            v-model="pricemin"
          />
          <label for="priceMin">€</label>
        </div>

        <div>
          <input
            type="number"
            name="pricemax"
            id="pricemax"
            placeholder="Maximum"
            :min="pricemin"
            v-model="pricemax"
          />
          <label for="priceMax">€</label>
        </div>
      </div>
    </div>

    <div class="sortPart">
      <p>Tri</p>

      <div>
        <label for="priceAsc">
          Prix croissants
          <input type="radio" value="price:asc" id="priceAsc" v-model="sort" />
        </label>

        <label for="priceDesc">
          Prix décroissants
          <input type="radio" value="price:desc" id="priceDesc" v-model="sort" />
        </label>

        <label for="noSort">
          Pas de tri
          <input type="radio" value="" id="noSort" v-model="sort" />
        </label>
      </div>
    </div>

    <button>Rechercher</button>
  </form>
</template>

<style scoped>
form {
  margin: 0 0 40px 0;
  gap: 50px;
  display: flex;
  justify-content: space-between;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  appearance: none;
}
input {
  outline: none;
}
p {
  font-weight: bold;
  margin-bottom: 10px;
}

.pricePart div {
  display: flex;
}
.pricePart > div {
  gap: 20px;
}
.pricePart input {
  height: 43px;
  width: 150px;
  border: 1px solid var(--grey-med);
  border-radius: 15px 0 0 15px;
  padding-left: 10px;
}
.pricePart input::placeholder {
  color: grey;
  font-size: 16px;
}
.pricePart label {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 43px;
  width: 45px;
  border: 1px solid var(--grey-med);
  border-left: none;
  border-radius: 0 15px 15px 0;
  font-size: 14px;
}

.sortPart {
  display: flex;
  flex-direction: column;
}
.sortPart > div {
  flex: 1;
  display: flex;
  align-items: center;
}
.sortPart label:not(:last-child) {
  margin-right: 15px;
}

button {
  align-self: center;
  background-color: var(--orange);
  padding: 10px;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 14px;
}
</style>
