import Vue from 'vue'
import VueResource from 'vue-resource'
import VueElectron from 'vue-electron'

Vue.use(VueResource)
Vue.use(VueElectron)

import App from './App.vue'

new Vue({
    el: 'body',
    components: { App }
})