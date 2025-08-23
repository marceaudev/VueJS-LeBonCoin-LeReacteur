<script setup>
import { inject, ref } from 'vue'
import axios from 'axios'

const token = inject('token')

const isPending = ref(false)
const info = ref('')
const email = ref('')
const username = ref('')
const password = ref('')

const signup = async () => {
  try {
    const { data } = await axios.post(
      'https://site--strapileboncoin--2m8zk47gvydr.code.run/api/auth/local/register',
      {
        email: email.value,
        username: username.value,
        password: password.value,
      },
    )
    token.username = data.user.username
    token.token = data.jwt
    isPending.value = false
  } catch (error) {
    info.value = 'Un problème est survenu, veuillez essayer à nouveau'
  }
}

const handleSubmit = () => {
  if (username.value.length === 0 || password.value.length === 0 || email.value.length === 0) {
    info.value = 'Veuillez remplir tous les champs'
  } else {
    isPending.value = true
    signup()
  }
}
</script>

<template>
  <main class="container">
    <section>
      <div class="topBloc">
        <h3>Bonjour !</h3>
        <p>Inscrivez-vous pour découvrir toutes nos fonctionnalités.</p>
      </div>
      <form @submit.prevent="handleSubmit">
        <label>
          Nom*
          <input type="text" name="username" id="username" v-model="username" @input="info = ''" />
        </label>
        <label>
          E-mail*
          <input type="text" name="email" id="email" v-model="email" @input="info = ''" />
        </label>
        <label>
          Mot de passe*
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
            @input="info = ''"
          />
        </label>
        <button>{{ isPending ? 'Inscription en cours...' : "S'inscrire" }}</button>
        <span v-if="info">{{ info }}</span>
      </form>
      <div class="join">
        Vous avez déjà un compte ? <RouterLink :to="{ name: 'login' }">Connectez-vous</RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  background-image: url(../assets/img/illustration.png);
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
}

section {
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 40px;
  box-shadow: 0 0 3px 0 var(--grey);
  width: 50%;
  border-radius: 10px;
  gap: 20px;
  height: 500px;
}

.topBloc {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

h3 {
  font-size: 22px;
  font-weight: 700;
}

form {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

label {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid var(--grey);
}

button {
  font-family: 'Nunito Sans', sans-serif;
  background-color: var(--orange);
  border: none;
  color: white;
  border-radius: 10px;
  padding: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  justify-content: center;
}

span {
  align-self: center;
  color: red;
}

.join {
  width: 100%;
  text-align: center;
}

a {
  text-decoration: underline;
}
</style>
