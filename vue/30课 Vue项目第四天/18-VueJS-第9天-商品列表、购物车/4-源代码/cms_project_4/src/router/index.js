import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Member from '@/components/Member/Member'
import Shopcart from '@/components/Shopcart/Shopcart'
import Search from '@/components/Search/Search'
import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'
import PhotoList from '@/components/Photo/PhotoList'
import PhotoDetail from '@/components/Photo/PhotoDetail'
import GoodsShow from '@/components/Goods/GoodsShow'
import GoodsDetail from '@/components/Goods/GoodsDetail'




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
    }

  ]
})
