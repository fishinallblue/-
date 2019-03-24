<template>
    <div id="app">
        <ul>
            <!-- 下面这种方式就是用name跳转 -->
            <li><router-link :to="{name: 'home'}">首页</router-link></li>
            <li><router-link to="/profile">个人中心</router-link></li>
        </ul>
    <router-viw></router-viw>
    </div>
</template>
<script>
import router from 'index.js'

router.beforeEach((to,from, next) => {

})

router.beforeResolve((to,from, next) => {
    // 当前路由组件已经解析后会跳转的钩子
    // 在组件的 beforeRouteUpdate 后面执行
})

router.aftereEach((to,from, next) => {
    
})

export default {
    // 路由钩子函数
    
    // 当组件切换的时候，会先触发离开的钩子 beforeRouterLeave
    // 进入新的页面，触发router里头的beforeEach
    // 然后进入路由配置中 beforeEnter
    // 解析完成 beforeResolve
    // 当前进入完毕 afterEach
    // 会进到新的页面，组件内部书法方法 beforeRouteUpdate
    // 组件渲染完成后，会调用当前的beforeRouterEnter 方法

    watch: {
        $route() {
            alert(1)  // 监控$route 实现加载数据
        }
    },
    beforeRouteUpdate() {
        // 也可以用于监控加载数据
    },
    beforeRouterLeave(to, from, next) { 
    },
    beforeRouterEnter(to, from, next) {
         // 此方法中不能拿到this 
         from.name // 获取到从哪个页面来的 路由的名字 可以通过这个方法添加校验

         next((vm) => {
             console.log(vm) //可以把当前渲染的组件打印出来
         })
    }
}
</script>
