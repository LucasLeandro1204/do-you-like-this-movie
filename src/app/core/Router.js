import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from 'app/Index.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'index', component: Index },
];

export default new VueRouter({
  routes,
});
