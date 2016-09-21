import Vue from 'vue'
import VueElectron from 'vue-electron'

Vue.use(VueElectron)

import App from './App.vue'

new Vue({
    el: 'body',
    components: { App }
})