import Vue from 'vue'
import Router from 'vue-router'
const HomePage = ()=>import('components/home/index.vue')
const companyTR = ()=>import('components/company-tr/index.vue')
const demandDone = ()=>import('components/demand-done/index')
const tradeMap = ()=>import('components/trade-map/index.vue')
// const aboutUs=()=>import('components/about-us/index.vue')
const aboutUs=()=>import('components/about-us/index1.vue')
const news =()=>import('components/news/index.vue')
// const govZS =()=>import('components/gov-zs/index.vue')
const govZS =()=>import('components/gov-zs/index1.vue')
const elite =()=>import('components/elite/index.vue')
const zsUniversity=()=>import('components/zs-university/index.vue')
const nc=()=>import('components/pastReview/nc.vue') //第十一届中国中部投资贸易博览会
const download=()=>import('components/download.vue') //第十一届中国中部投资贸易博览会

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },{
      path: '/index/home',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path:'/company-tr',
      component:companyTR
    },{
      path:'/demand-done',
      component:demandDone
    },{
      path:'/trade-map',
      component:tradeMap
    },{
      path:'/about-us',
      component:aboutUs
    },{
      path:'/news',
      component:news
    },{
      path:'/gov-zs',
      component:govZS
    },
    {
      path:'/elite',
      component:elite
    },
    {
      path:'/zs-university',
      component:zsUniversity
    },{
      path:'/blh-11',
      component:nc
    }
    ,{
      path:'/download',
      component:download
    }
  ]
})
