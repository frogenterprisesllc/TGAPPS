import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _00426dfe = () => interopDefault(import('../pages/buildingWalk.vue' /* webpackChunkName: "pages/buildingWalk" */))
const _0583eeb2 = () => interopDefault(import('../pages/caddieReport.vue' /* webpackChunkName: "pages/caddieReport" */))
const _4ee895ba = () => interopDefault(import('../pages/caddieView.vue' /* webpackChunkName: "pages/caddieView" */))
const _706ebbe6 = () => interopDefault(import('../pages/dishpit.vue' /* webpackChunkName: "pages/dishpit" */))
const _47fa1209 = () => interopDefault(import('../pages/golfServicesView.vue' /* webpackChunkName: "pages/golfServicesView" */))
const _064881be = () => interopDefault(import('../pages/managerView.vue' /* webpackChunkName: "pages/managerView" */))
const _72fc883a = () => interopDefault(import('../pages/statusBusCart.vue' /* webpackChunkName: "pages/statusBusCart" */))
const _7deb0303 = () => interopDefault(import('../pages/updateBusCart.vue' /* webpackChunkName: "pages/updateBusCart" */))
const _6d515cc4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/buildingWalk",
    component: _00426dfe,
    name: "buildingWalk"
  }, {
    path: "/caddieReport",
    component: _0583eeb2,
    name: "caddieReport"
  }, {
    path: "/caddieView",
    component: _4ee895ba,
    name: "caddieView"
  }, {
    path: "/dishpit",
    component: _706ebbe6,
    name: "dishpit"
  }, {
    path: "/golfServicesView",
    component: _47fa1209,
    name: "golfServicesView"
  }, {
    path: "/managerView",
    component: _064881be,
    name: "managerView"
  }, {
    path: "/statusBusCart",
    component: _72fc883a,
    name: "statusBusCart"
  }, {
    path: "/updateBusCart",
    component: _7deb0303,
    name: "updateBusCart"
  }, {
    path: "/",
    component: _6d515cc4,
    name: "index"
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
