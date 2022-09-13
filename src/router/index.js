import { createRouter, createWebHashHistory } from 'vue-router'

// 引入物业管理相关的路由页面
import propertyRouter from './property'
//引入数据可视页面相关路由
import visualizationRouter from './visualization'
//引入配置中心页面相关路由
import configurationRouter from './configuration'

const manageroutes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login.vue'),
    },
    {
        path: '/',
        name: '/',
        component: () => import('../layout/index.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/home/home.vue'),
            },
            {
              path: '/configuration',
              name: 'configuration',
              redirect: '/configurationall',
              component: () => import('../views/configuration.vue'),
              children: [
                ...configurationRouter
              ]
            },
            {
                path: '/operation',
                name: 'operation',
                component: () => import('../views/operation.vue'),
            },

            {
                path: '/property',
                name: 'property',
                redirect: '/property/totalProperty',
                component: () => import('../views/property/property.vue'),
                children: [
                    // 引入物业管理相关的路由
                    ...propertyRouter
                ]

            },
            {
                path: '/visualization',
                name: 'visualization',
                redirect: '/ParkCockpit',
                component: () => import('../views/visualization/visualization.vue'),
                children: [
                    ...visualizationRouter
                ]
            },

        ]
    },

]

// 哈希路由
const router = createRouter({
    // 路由模式
    history: createWebHashHistory(),
    routes: manageroutes,
})
/**
 - 输出对象
 */
export default router;