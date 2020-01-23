import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import "./assets/css/main.css"

Vue.prototype.$axios = axios

new Vue({
  el: '#app',
  render: h => h(App),
  data () {
    return {
    }
  },
  mounted () {
    
  }
})