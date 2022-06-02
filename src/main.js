import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueObserveVisibility from 'vue-observe-visibility'
import VueScrollmagic from 'vue-scrollmagic'
import LottieVuePlayer from "@lottiefiles/vue-lottie-player"

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
  refreshInterval: 5
})
Vue.use(LottieVuePlayer)

new Vue({
  render: h => h(App),
}).$mount('#app')
