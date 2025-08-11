<script setup></script>

<template>
  <h1>Des millions de petites annonces et autant d'occasions de se faire plaisir</h1>
  <section class="banner">
    <img src="../assets/img/feuille-bleue.svg" alt="Dessin d'une feuille bleue" class="leaf" />
    <img src="../assets/img/onde-corail.svg" alt="Dessin d'un corail" class="coral" />
    <p>C'est le moment de vendre</p>
    <button><font-awesome-icon :icon="['far', 'square-plus']" />Déposer une annonce</button>
  </section>
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 25px;
}

.banner {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: var(--orange-pale);
  height: 80px;
  gap: 20px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.leaf {
  height: 100%;
  position: absolute;
  right: 0;
}

.coral {
  height: 100%;
  position: absolute;
  left: 0;
}

.banner p {
  font-size: 18px;
  font-weight: bold;
}
</style>
