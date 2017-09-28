// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import sellers from './components/sellers/sellers.vue';
import VueResource from 'vue-resource';

import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/sellers', component: sellers}
];
const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router
}).$mount('#app');

router.push('/goods');
