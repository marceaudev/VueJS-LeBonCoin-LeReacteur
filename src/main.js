import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faSearch,
  faCircle,
  faLocationArrow,
  faCheckDouble,
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
)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
