import Vue from 'vue'
import VueRouter from 'vue-router';
import RouterView from './RouterView';
// import login from './login'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//-----page-------------
import register from './Register.vue';
import login from './Login.vue'
import Todo from './Todo.vue';
//----------------------
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter)


const routes=[
  {path:'/', component : login},
  {path:'/login', component : login},
  {path:'/Register', component : register},
  {path:'/Todo', component : Todo},
]

const router = new VueRouter({
  routes
})


new Vue({
  render: h => h(RouterView),
  router,
}).$mount('#app')


