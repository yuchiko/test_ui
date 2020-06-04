import Vue from 'vue'
import App from './App.vue'
import HkInterface from 'hk-interface';
import 'hk-interface/dist/hkInterface.css';


Vue.use(HkInterface);

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
