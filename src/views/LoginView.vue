<script setup>
import { inject, ref } from 'vue'
import axios from 'axios'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

const token = inject('token')

const showPw = ref(false)
const isPending = ref(false)
const info = ref('')
const email = ref('')
const password = ref('')

const login = async () => {
  try {
    const { data } = await axios.post(
      'https://site--strapileboncoin--2m8zk47gvydr.code.run/api/auth/local',
      {
        identifier: email.value,
        password: password.value,
      },
    )
    token.username = data.user.username
    token.token = data.jwt
    cookies.set('token', data.jwt)
    cookies.set('username', data.user.username)
    isPending.value = false
  } catch (error) {
    info.value = 'Un problème est survenu, veuillez essayer à nouveau'
  }
}

const handleSubmit = () => {
  if (password.value.length === 0 || email.value.length === 0) {
    info.value = 'Veuillez remplir tous les champs'
  } else {
    isPending.value = true
    login()
  }
}
</script>

<template>
  <main class="container">
    <section>
      <div class="topBloc">
        <h3>Bonjour !</h3>
        <p>Connectez-vous pour découvrir toutes nos fonctionnalités.</p>
      </div>
      <form @submit.prevent="handleSubmit">
        <label>
          E-mail*
          <input type="text" name="email" id="email" v-model="email" @input="info = ''" />
        </label>
        <label>
          Mot de passe*
          <div class="password">
            <input :type="showPw ? 'text' : 'password'" v-model="password" @input="info = ''" />
            <div class="showpass" @click="showPw = !showPw">
              <font-awesome-icon :icon="['fas', 'eye']" v-if="!showPw" />
              <font-awesome-icon :icon="['fas', 'eye-slash']" v-else />
            </div>
          </div>
        </label>
        <button>
          {{ isPending ? 'Connexion en cours...' : 'Se connecter' }}
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </button>
        <span v-if="info">{{ info }}</span>
      </form>
      <div class="join">
        Envie de nous rejoindre ? <RouterLink :to="{ name: 'signup' }">Créer un compte</RouterLink>
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

.password {
  display: flex;
}

.password input {
  border-radius: 10px 0 0 10px;
}

.showpass {
  height: 100%;
  border-top: 1px solid var(--grey);
  border-right: 1px solid var(--grey);
  border-bottom: 1px solid var(--grey);
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--grey);
  border-radius: 0 10px 10px 0;
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
