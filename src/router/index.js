//配置路由
import VueRouter from 'vue-router';  //导入vue-router插件
import Vue from 'vue'
import index from '../components/index/index'

Vue.use(VueRouter)  //全局使用插件

const routes=[      //配置路由路径和映射关系
    {
        model:'history',
        path:'/',
        component:index
    }
]

const router=new VueRouter({    //注册路由，并且映射关系为上面router
    routes
})
//将router对象导出,然后在main.js中导入，并挂载
export default router
