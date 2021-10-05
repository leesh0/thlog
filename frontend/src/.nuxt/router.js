import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _68a8faf3 = () => interopDefault(import('../pages/new.vue' /* webpackChunkName: "pages/new" */))
const _cb553440 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _2c6dd7a5 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _58c6037d = () => interopDefault(import('../pages/auth/github.vue' /* webpackChunkName: "pages/auth/github" */))
const _c206560c = () => interopDefault(import('../pages/settings/profile.vue' /* webpackChunkName: "pages/settings/profile" */))
const _14aace65 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _b90b95b0 = () => interopDefault(import('../pages/index/index.vue' /* webpackChunkName: "pages/index/index" */))
const _cb1928be = () => interopDefault(import('../pages/index/latest.vue' /* webpackChunkName: "pages/index/latest" */))
const _3a4f9e3d = () => interopDefault(import('../pages/_user.vue' /* webpackChunkName: "pages/_user" */))
const _6b6c7a00 = () => interopDefault(import('../pages/_user/index.vue' /* webpackChunkName: "pages/_user/index" */))
const _7b867d2f = () => interopDefault(import('../pages/_user/activities.vue' /* webpackChunkName: "pages/_user/activities" */))
const _cd06617a = () => interopDefault(import('../pages/_user/feeds.vue' /* webpackChunkName: "pages/_user/feeds" */))
const _556b8cf3 = () => interopDefault(import('../pages/_user/folders.vue' /* webpackChunkName: "pages/_user/folders" */))
const _05a3b940 = () => interopDefault(import('../pages/_user/follower.vue' /* webpackChunkName: "pages/_user/follower" */))
const _785e5a3f = () => interopDefault(import('../pages/_user/following.vue' /* webpackChunkName: "pages/_user/following" */))
const _40707b72 = () => interopDefault(import('../pages/_user/thread/_read.vue' /* webpackChunkName: "pages/_user/thread/_read" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/new",
    component: _68a8faf3,
    name: "new"
  }, {
    path: "/register",
    component: _cb553440,
    name: "register"
  }, {
    path: "/search",
    component: _2c6dd7a5,
    name: "search"
  }, {
    path: "/auth/github",
    component: _58c6037d,
    name: "auth-github"
  }, {
    path: "/settings/profile",
    component: _c206560c,
    name: "settings-profile"
  }, {
    path: "/",
    component: _14aace65,
    children: [{
      path: "",
      component: _b90b95b0,
      name: "index"
    }, {
      path: "latest",
      component: _cb1928be,
      name: "index-latest"
    }]
  }, {
    path: "/:user",
    component: _3a4f9e3d,
    children: [{
      path: "",
      component: _6b6c7a00,
      name: "user"
    }, {
      path: "activities",
      component: _7b867d2f,
      name: "user-activities"
    }, {
      path: "feeds",
      component: _cd06617a,
      name: "user-feeds"
    }, {
      path: "folders",
      component: _556b8cf3,
      name: "user-folders"
    }, {
      path: "follower",
      component: _05a3b940,
      name: "user-follower"
    }, {
      path: "following",
      component: _785e5a3f,
      name: "user-following"
    }, {
      path: "thread/:read?",
      component: _40707b72,
      name: "user-thread-read"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
