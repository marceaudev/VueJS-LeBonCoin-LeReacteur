import './assets/main.css'

import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

import {
  faSearch,
  faCircle,
  faLocationArrow,
  faCheckDouble,
  faChevronLeft,
  faChevronRight,
  faEye,
  faEyeSlash,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

import { faUser, faSquarePlus, faHeart, faClock } from '@fortawesome/free-regular-svg-icons'

library.add(
  faSearch,
  faSquarePlus,
  faUser,
  faCircle,
  faHeart,
  faLocationArrow,
  faCheckDouble,
  faClock,
  faChevronLeft,
  faChevronRight,
  faEye,
  faEyeSlash,
  faArrowRight,
)

const token = reactive({
  token: cookies.get('token') || null,
  username: cookies.get('username') || null,
})

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.provide('GlobalStore', { token: token.token, username: token.username })

app.provide('token', token)

app.use(router)

app.mount('#app')
