import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'
Vue.use(Router)

/**
 * 恒定的路线
 * 没有权限要求的基本页
 * 可以访问所有角色
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '', icon: 'dashboard' }
    }]
  },
  {
    path: '/',
    component: Layout,
    children: [{
      path: 'user',
      name: 'User',
      component: () => import('@/views/user/index'),
      meta: { title: '个人主页', icon: 'form' }
    }]
  },
  {
    path: '/',
    component: Layout,
    children: [{
      path: 'edit',
      name: 'Edit',
      component: () => import('@/views/user/edit'),
      meta: { title: '个人编辑', icon: 'form' }
    }]
  },
  {
    path: '/',
    component: Layout,
    children: [{
      path: 'article',
      name: 'Article',
      component: () => import('@/views/article/index'),
      meta: { title: '文章', icon: 'form' }
    }]
  },
  {
    path: '/',
    component: Layout,
    children: [{
      path: 'questions',
      name: 'Questions',
      component: () => import('@/views/questions/index'),
      meta: { title: '问答', icon: 'form' }
    }]
  },
  ,
  {
    path: '/',
    component: Layout,
    children: [{
      path: 'comment',
      name: 'Comment',
      component: () => import('@/views/questions/answer'),
      meta: { title: '回答', icon: 'form' }
    }]
  },
  {
    path: '/',
    component: Layout,
    children: [{
      path: 'activity',
      name: 'Activity',
      component: () => import('@/views/activity/index'),
      meta: { title: '活动', icon: 'form' }
    }]
  },
  {
    path: '/',
    component: Layout,
    children: [{
      path: 'topic',
      name: 'Topic',
      component: () => import('@/views/topic/index'),
      meta: { title: '专题', icon: 'form' }
    }]
  },
  {
    path: '/',
    component: Layout,
    children: [{
      path: 'recruit',
      name: 'Recruit',
      component: () => import('@/views/recruit/index'),
      meta: { title: '招聘', icon: 'form' }
    }]
  },
  {
    path: '/',
    component: Layout,
    children: [{
      path: 'download',
      name: 'Download',
      component: () => import('@/views/download/index'),
      meta: { title: '下载', icon: 'form' }
    }]
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // 需要服务支持
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// 细节见: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // 重置路由器
}
/* 设置默认页面 */
export default router
