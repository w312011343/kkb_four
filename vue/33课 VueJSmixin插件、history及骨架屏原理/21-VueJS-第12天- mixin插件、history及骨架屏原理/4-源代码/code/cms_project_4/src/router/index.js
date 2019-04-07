import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('@/components/Home')
const Member = () => import('@/components/Member/Member')
const Shopcart = () => import('@/components/Shopcart/Shopcart')
const Search = () => import('@/components/Search/Search')
const NewsList = () => import('@/components/News/NewsList')
const NewsDetail = () => import('@/components/News/NewsDetail')
const PhotoList = () => import('@/components/Photo/PhotoList')
const PhotoDetail = () => import('@/components/Photo/PhotoDetail')
const GoodsShow = () => import('@/components/Goods/GoodsShow')
const GoodsDetail = () => import('@/components/Goods/GoodsDetail')
const GoodsComment = () => import('@/components/Goods/GoodsComment')




Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/member',
      name: 'Member',
      component: Member
    }, {
      path: '/shopcart',
      name: 'Shopcart',
      component: Shopcart
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }, {
       path: '/news/list',
       name: 'NewsList',
       component: NewsList
    },
    {
      path:'/news/detail/:id',
      name:'NewsDetail',
      component:NewsDetail
    },
    {
      path:'/photo/list',
      name:'PhotoList',
      component:PhotoList
    },
    {
      path:'/photo/detail/:id',
      name:'PhotoDetail',
      component:PhotoDetail
    },
    {
      path:'/goods/list/:page',
      name:'GoodsShow',
      component:GoodsShow
    },
    {
      path:'/goods/detail',
      name:'GoodsDetail',
      component:GoodsDetail
    },
    {
      path:'/goods/comment',
      name:'GoodsComment',
      component:GoodsComment
    }

  ]
})
