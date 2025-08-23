<script setup>
import { RouterLink } from 'vue-router'
import logo from '../assets/img/logo.svg'
import PublishBtn from './PublishBtn.vue'
import { inject } from 'vue'

const token = inject('token')

const disconnect = () => {
  token.token = ''
  token.username = ''
}
</script>

<template>
  <header>
    <div class="container">
      <div class="topHeader">
        <RouterLink :to="{ name: 'home' }">
          <img :src="logo" alt="Logo de Leboncoin" />
        </RouterLink>
        <div>
          <PublishBtn />
          <div>
            <input
              type="text"
              name="searchBar"
              id="searchBar"
              placeholder="Rechercher sur leboncoin"
            />
            <button><font-awesome-icon :icon="['fas', 'search']" /></button>
          </div>
        </div>
        <div @click="disconnect">
          <font-awesome-icon :icon="['far', 'user']" />
          <RouterLink :to="{ name: 'login' }">{{
            token.token ? token.username : 'Se connecter'
          }}</RouterLink>
        </div>
      </div>
      <div class="bottomHeader">
        <nav>
          <ul>
            <li>Immobilier</li>
            <font-awesome-icon :icon="['fas', 'circle']" />
            <li>Véhicules</li>
            <font-awesome-icon :icon="['fas', 'circle']" />
            <li>Locations de vacances</li>
            <font-awesome-icon :icon="['fas', 'circle']" />
            <li>Emploi</li>
            <font-awesome-icon :icon="['fas', 'circle']" />
            <li>Mode</li>
            <font-awesome-icon :icon="['fas', 'circle']" />
            <li>Maison & Jardin</li>
            <font-awesome-icon :icon="['fas', 'circle']" />
            <li>Famille</li>
            <font-awesome-icon :icon="['fas', 'circle']" />
            <li>Electronique</li>
            <font-awesome-icon :icon="['fas', 'circle']" />
            <li>Loisirs</li>
            <font-awesome-icon :icon="['fas', 'circle']" />
            <li>Autres</li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* header border bottom & margin*/
header {
  box-shadow: 0 0 3px 0 var(--grey);
  margin-bottom: 25px;
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 1;
  top: 0;
}

/* header container , size, position & display */
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 0 0 0;
  height: var(--header-height);
}

/* logo size */
img {
  width: 140px;
}

/* topHeader position, display*/
.topHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* topHeader middle bloc */
.topHeader > div:nth-child(2) {
  display: flex;
  gap: 20px;
}

/* topHeader middle bloc search input + search button */
.topHeader > div:nth-child(2) > div {
  display: flex;
  position: relative;
  align-items: center;
}

/* search button position */
.topHeader > div:nth-child(2) > div button {
  position: absolute;
  right: 5px;
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: var(--orange);
  border: none;
  border-radius: 10px;
}

/* search input style */
.topHeader input {
  width: 250px;
  background-color: var(--grey-light);
  border-radius: 10px;
  padding: 5px;
  height: 100%;
  font-family: 'Nunito Sans', sans-serif;
  border: none;
}

/* search input placeholder style */
.topHeader input::placeholder {
  color: var(--black);
  font-size: 16px;
  padding: 0 5px;
}

/* topHeader login*/
.topHeader > div:nth-child(3) {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

/* bottomHeader size */
.bottomHeader nav {
  width: 100%;
}

/* bottomHeader unordered list style and size */
.bottomHeader ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* dot icon between li */
.bottomHeader ul svg {
  font-size: 2px;
}
</style>
