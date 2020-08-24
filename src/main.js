import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTimes, faHeart)
Vue.component('font-awesome-icon', FontAwesomeIcon)



new Vue({
  el: '#app',
  render: h => h(App)
})
