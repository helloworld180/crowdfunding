import Vue from 'vue'
import VueRouter from 'vue-router'

import registerName from './components/registerName.vue'
import login from './components/loginName.vue'
import myDown from './components/myDown.vue'
import see from './components/seeDemo.vue'
import my from './components/myDemo.vue'
import search from './components/searchDemo.vue'


Vue.use(VueRouter)



const router = new VueRouter({
  routes:[
    {path:'/login',component:login},
    {path:'/',redirect:'/login'},
    
    {path:"/register",component:registerName},

  {
    path:"/mydown",
    component:myDown,
  },
  {path:'/see',component:see},
  {path:'/my',component:my},
  {path:'/search',component:search}

    
  ],
  mode:'history'
})

export default router