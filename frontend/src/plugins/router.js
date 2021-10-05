export default async ({ app }) => {
  function checkUser(to, from, next) {
    if (to.name == 'register') {
      if (app.$auth.$state.loggedIn && app.$auth.$state.user.nickname) {
        app.router.push('/')
      }
      next()
    } else {
      let auth = app.$auth.$state
      if (auth.loggedIn && !auth.user.nickname) {
        app.router.push({ name: 'register' })
      }
      next()
    }
  }
  app.router.beforeEach(checkUser)
}
