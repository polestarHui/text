import Vue from 'vue';
// 1、导入vue-router包
import VueRouter from 'vue-router'
// 2、手动安装 VueRouter
Vue.use(VueRouter)

//导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'


// 导入mui的样式表，和bootstrap没有差别
import './lib/mui/css/mui.css'



// 导入所有的mint-ui组件
// 导入mint-ui
// import MintUI from 'mint-ui'//导入所有的组件
// // 导入mint-ui的样式（这里可以省略node_modules这一层目录）
// import 'mint-ui/lib/style.css'
// // 将mint-ui安装到Vue中
// Vue.use(MintUI)//把所有的组件注册为全局组件



// 按需导入 mint-ui组件
import {Button} from 'mint-ui'
// 使用vue.component注册按钮组件
Vue.component(Button.name,Button)



// 导入APP组件
import app from './APP.vue'

import router from './router.js'

var vm = new Vue({
    el:'#app',
    render:c => c(app),//render会把 el 指定的容器中，所有的内容都清空覆盖，所以 不要 把 路由的router-link 和 router-view 直接写到el 所控制的元素中
    router//4、将路由对象挂载到 VM 上
})

// 注意：APP这个组件，是通过VM实例的render函数，渲染出来的，render函数如果要渲染组件，渲染出来的组件，只能放到el:"#app"所指定的元素中
// Account 和 GoodsList 组件，是通过路由匹配监听到的，所以，这两个组件，只能展示到 属于 路由 的<router-view></router-view>中去