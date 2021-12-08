import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import store from './store'
import { Chart, registerables } from "chart.js";
import VComp from "@vue/composition-api";

Chart.register(...registerables);
Vue.use(VComp);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
