import VueRouter from 'vue-router'

import Home from './components/tabbar/Homecontainer.vue'
import Member from './components/tabbar/Membercontainer.vue'
import Shopcar from './components/tabbar/Shopcarcontainer.vue'
import Search from './components/tabbar/Searchcontainer.vue'

var router=new VueRouter({
    routes:[
        {path:'/home',component:Home},
        {path:'/member',component:Member},
        {path:'/shopcar',component:Shopcar},
        {path:'/search',component:Search}

    ],
    linkActiveClass:'mui-active'
})

export default router