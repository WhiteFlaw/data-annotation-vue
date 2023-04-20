import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
    alias: '/switch-platform'
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/data-management',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'DataManagement',
        component: () => import('@/views/dataManagement/index'),
        meta: { title: '数据导入', icon: 'data-management' }
      }
    ]
  },
  {
    path: '/customer-management',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'CustomerManagement',
        component: () => import('@/views/customerManagement/index'),
        meta: { title: '客户管理', icon: 'customer-management' }
      }
    ]
  },
  {
    path: '/project-management',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'ProjectManagement',
        component: () => import('@/views/projectManagement/index'),
        meta: { title: '项目管理', icon: 'project-management' }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '我的工作台', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/3d-annotate',
    component: () => import('@/views/annotate/index'),
    name: 'Annotation',
    meta: {
      title: '开始3D标注',
      icon: 'link'
    }
  },
  {
    path: '/annotate',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '3d',
        component: () => import('@/views/annotate/index'),
        meta: { title: '标注-內', icon: 'dashboard' }
      }
    ]
  },
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

export const asyncRoutes = [
  {
    path: '/teamManagement',
    component: Layout,
    meta: { title: '团队管理', roles: ['admin']},
    children: [
      {
        path: 'userManagement',
        name: 'userManagement',
        component: () => import('@/views/teamManagement/userManagement'),
        meta: { title: '用户管理'}
      },
      {
        path: 'team',
        component: () => import('@/views/teamManagement'),
        redirect: '/teamList',
        children: [
          {
            path: 'teamList',
            name: 'teamList',
            component: () => import('@/views/teamManagement/teamList'),
            meta: {
              title: '团队列表'
            }
          },
          {
            path: 'teamListDetail',
            component: () => import('@/views/teamManagement'),
            redirect: '/teamManagement/team/teamList',
            meta: {
              title: '团队列表'
            },
            hidden: true,
            children: [
              {
                path: 'teamDetail',
                name: 'teamDetail',
                component: () => import('@/views/teamManagement/teamList/components/teamDetail'),
                meta: {title: '团队详情'}
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/checkManagement',
    component: Layout,
    meta: {title: '交付验证', icon: 'dashboard', roles: ['admin']},
    redirect: '/checkManagement/projectList',
    children: [
      {
        path: 'projectList',
        name: 'projectList',
        component: () => import('@/views/checkManagement/projectList'),
        meta: {title: '项目列表'},
        hidden: true
      },
      {
        path: 'projectDetail',
        name: 'projectDetail',
        component: () => import('@/views/checkManagement/projectDetail'),
        meta: {title: '项目详情'},
        hidden: true
      }
    ]
  },
  {
    path: '/myTask',
    name: 'myTask',
    component: Layout,
    meta: { title: '我的任务', icon: 'dashboard', roles: ['manager', 'teamLeader', 'qc', 'tagger']},
    redirect: '/myTask/taggingTask',
    alwaysShow: true,
    children: [
      {
        path: 'taggingTask',
        name: 'taggingTask',
        component: () => import('@/views/myTask/index'),
        meta: { title: '标注项目', icon: 'dashboard' },
        redirect: '/myTask/taggingTask/project-list',
        children: [
          {
            path: 'project-list',
            component: () => import('@/views/myTask/taggingTask/index'),
            meta: { title: '标注项目列表', icon: 'dashboard', roles: ['manager', 'teamLeader', 'tagger'] }
          },
          {
            path: 'taskDetail/:projectId',
            name: 'taskDetail',
            component: () => import('@/views/myTask/index'),
            meta: { title: '项目详情', icon: 'dashboard', roles: ['manager', 'teamLeader', 'tagger']},
            redirect: '/myTask/taggingTask/taskDetail/:projectId/task-list',
            hidden: true,
            children: [
              {
                path: 'task-list',
                component: () => import('@/views/myTask/taskDetail/index'),
                meta: { title: '任务列表', icon: 'dashboard'}
              },
              {
                path: 'jobDetail/:taskId',
                name: 'jobDetail',
                component: () => import('@/views/myTask/jobDetail/index'),
                meta: { title: '作业列表', icon: 'dashboard' },
                hidden: true
              }
            ]
          }
        ]
      }
    ]
  }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
