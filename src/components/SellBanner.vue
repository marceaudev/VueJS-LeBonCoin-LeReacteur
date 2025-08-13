<script setup>
import PublishBtn from './PublishBtn.vue'
</script>

<template>
  <section class="banner">
    <img src="../assets/img/feuille-bleue.svg" alt="Dessin d'une feuille bleue" class="leaf" />
    <img src="../assets/img/onde-corail.svg" alt="Dessin d'un corail" class="coral" />
    <p>C'est le moment de vendre</p>
    <PublishBtn />
  </section>
</template>

<style scoped>
/* position, display, size & style for the banner*/
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

/* leaf img position */
.leaf {
  height: 100%;
  position: absolute;
  right: 0;
}

/* coral img position */
.coral {
  height: 100%;
  position: absolute;
  left: 0;
}

/* banner text */
.banner p {
  font-size: 18px;
  font-weight: bold;
}
</style>
