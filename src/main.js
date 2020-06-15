import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'
import VueRouter from 'vue-router';
import RouterView from './RouterView';
import VueJWT from 'vuejs-jwt'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//-----page-------------
import register from './Register.vue';
import login from './Login.vue'
import Todo from './Todo.vue';
import see from './see.vue';


 



//----------------------
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueLocalStorage);
Vue.use(VueJWT)
// Vue.use(VueAxios, axios);


const routes=[
  {path:'/', component : login},
  {path:'/login', component : login},
  {path:'/Register', component : register},
  {path:'/Todo', component : Todo},
  {path:'/see', component : see},
]

const router = new VueRouter({
  routes
})


new Vue({
  render: h => h(RouterView),
  router,
}).$mount('#app')