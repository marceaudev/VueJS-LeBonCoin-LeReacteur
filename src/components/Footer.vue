<template>
  <footer>
    <div class="container">
      <p>
        Made by <a href="https://github.com/marceaudev" target="_blank">marceaudev</a> with
        <a href="https://vuejs.org/guide/introduction" target="_blank">VueJS</a>
      </p>
    </div>
  </footer>
</template>

<style>
footer {
  height: var(--footer-height);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--grey-light);
}

footer div {
  display: flex;
  align-items: center;
  justify-content: center;
}

a {
  font-weight: bold;
}
</style>
