import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' //导入依赖
import Vuex from 'vuex' //导入依赖
// 页面组件
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import store from './store'


Vue.use(VueRouter) //使用依赖
Vue.use(Vuex) //使用依赖

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
      meta: { auth: true }
    },
    {
      path: '/login',
      component: Login,
      name: 'login',
      meta: { auth: true }
    }
  ]
})

/* 路由拦截：检查是否登录，未登录则跳到登录页 */
router.beforeEach((to, _, next) => {
  console.log(to);
  // 过滤需要验证的路由
  if (to.matched.some(m => m.meta.auth)) {
    // 这一个判断非常重要，没有的话会导致栈溢出报错
    if (to.name == 'login') {
      next()
    } else {
      if (store.state.isLogin == true) {
        next()
      } else {
        next('/login')
      }
    }
  } else {
    next()
  }
})

// const store = new Vuex.Store({
//   state: {
//     isLogin: false,
//     username: '', //用户名
//     password: '' //密码
//   },
//   mutations: {
//     // 修改登录状态
//     changeLogin(state, data) {
//       state.isLogin = data
//     },
//     // 修改用户名状态
//     changeUsername(state, data) {
//       state.username = data
//     },
//     // 修改密码状态
//     changePassword(state, data) {
//       state.password = data
//     }
//   }
// })



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
