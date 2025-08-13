<script setup>
import { RouterLink } from 'vue-router'
import logo from '../assets/img/logo.svg'
</script>

<template>
  <header>
    <div class="container">
      <div class="topHeader">
        <RouterLink :to="{ name: 'home' }">
          <img :src="logo" alt="Logo de Leboncoin" />
        </RouterLink>
        <div>
          <button><font-awesome-icon :icon="['far', 'square-plus']" />Déposer une annonce</button>
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
        <div>
          <font-awesome-icon :icon="['far', 'user']" />
          <p>Se connecter</p>
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
/* Bordure sous le header principal */
header {
  border-bottom: 1px solid var(--grey);
  margin-bottom: 25px;
}

/* Conteneur principal du header : colonne avec espacement et padding */
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 0 0 0;
  height: var(--header-height);
}

/* Taille du logo */
img {
  width: 140px;
}

/* Partie haute du header : logo, boutons, recherche, connexion */
.topHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Conteneurs internes (bouton déposer + recherche) dans le top-header avec espacement */
.topHeader > div:nth-child(2) {
  display: flex;
  gap: 20px;
}

/* Conteneur de la barre de recherche (input + bouton) */
.topHeader > div:nth-child(2) > div {
  display: flex;
  position: relative;
  align-items: center;
}

/* Bouton de recherche positionné à droite dans le conteneur input */
.topHeader > div:nth-child(2) > div button {
  position: absolute;
  right: 5px;
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--black);
}

/* Style du champ input recherche */
.topHeader input {
  width: 250px;
  background-color: var(--grey-light);
  border-radius: 10px;
  padding: 5px;
  height: 100%;
  font-family: 'Nunito Sans', sans-serif;
  border: none;
}

/* Style du placeholder du champ recherche */
.topHeader input::placeholder {
  color: var(--black);
  font-size: 16px;
  padding: 0 5px;
}

/* Conteneur pour l'icône utilisateur + texte */
.topHeader > div:nth-child(3) {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

/* bottom-header contenant la navigation */
.bottomHeader nav {
  width: 100%;
}

/* Liste de navigation principale avec éléments espacés */
.bottomHeader ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Icônes cercle entre les items */
.bottomHeader ul svg {
  font-size: 2px;
}
</style>
