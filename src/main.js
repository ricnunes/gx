import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueObserveVisibility from 'vue-observe-visibility'
import VueScrollmagic from 'vue-scrollmagic'
import LottieVuePlayer from "@lottiefiles/vue-lottie-player"
import { firestorePlugin } from 'vuefire';
import firebase from 'firebase';

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueObserveVisibility)
Vue.use(VueScrollmagic, {
  vertical: true,
  globalSceneOptions: {
    triggerHook: "onLeave",
    duration: "100%"
  },
  loglevel: 2,
  refreshInterval: 100
})
Vue.use(LottieVuePlayer)
Vue.use(firestorePlugin, {
  wait: true
})

Vue.prototype.$firebaseDatabase = firebase.default.firestore()

new Vue({
  render: h => h(App),
}).$mount('#app')
