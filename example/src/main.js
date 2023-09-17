import Vue from 'vue'
import App from './App.vue'

import tree from '../../dist/vue-jstree.umd';
import '../../dist/vue-jstree.css';

Vue.config.productionTip = false
Vue.use(tree);

new Vue({
  render: h => h(App),
}).$mount('#app')
