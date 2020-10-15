import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import '@/utils/veevalidate'
import Alert from './views/components/modules/alert/Alert.vue'


Vue.config.productionTip = false
Vue.use(Alert)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
