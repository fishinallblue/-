import Vue from 'vue';
import Router from 'vue-router';

// 第三方插件引入后，需要使用Vue.use() => install

Vue.use(Router) // install 方法中，注册了两个全局组件 router-link  router-view
// 会在每个组件上定义两个属性  $router 和 $route =>  this.$router   this.$route


// router 的模式有两种， hash 带着#  history不带着
export default new Router ({
    mode: 'hash',
    routes: [
    //     {
    //     path: '/home',
    //     name: 'home',
    //     component: Home   // 这是URL对应的页面组件 
    // }
    {       // 下面我们想完成，一个视图对应多个路由的，比如我一个页面有三个组件，怎么办呢
        path: '/home',
        name: 'home',
        components: {
            default: Home,
            name: Name,  
            version: Version // 前面的 version 表示对应的<router-view> 名字，后面的 Version 是组件对象
        }    
    },{
        path: '/login',
        name: 'login',
        component: () => import('views/login') // 如果不这么写，那么进入首页的时候，login这个组件也加载进来了
                                // 使用这种方式实现组件的懒加载  但是可能会出现白屏的问题
    },{
        path: '/profile',
        name: 'profile',
        component: Profile,
        beforeEnter(to,from, next) {  //可以通过这个钩子添加一些权限的校验
            // 先走路由配置里头的这个钩子，才会走组件里面的钩子 beforeRouteEnter

        }
    },{
        path: '/user',
        name: 'user',
        component: User,
        children: [
            {
                path: '', // 空的表示是默认的
                component: UserAdd  
            },
            {
                path: 'add', // 如果用/add 那么就是根路径下面/add
                component: UserAdd  
            }
        ]
    },
    {
        path: '*', // 设置默认的路由
        redirect: '/home',
        hidden: true
    }
    ]
})