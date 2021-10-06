import Middleware from './middleware'
import { Auth, authMiddleware, ExpiredAuthSessionError } from '~auth/runtime'

// Active schemes
import { RefreshScheme } from '~auth/runtime'
import { Oauth2Scheme } from '~auth/runtime'

Middleware.auth = authMiddleware

export default function (ctx, inject) {
  // Options
  const options = {
  "resetOnError": false,
  "ignoreExceptions": false,
  "scopeKey": "scope",
  "rewriteRedirects": true,
  "fullPathRedirect": false,
  "watchLoggedIn": true,
  "redirect": {
    "login": "/",
    "logout": "/",
    "home": "/",
    "callback": "/"
  },
  "vuex": {
    "namespace": "auth"
  },
  "cookie": {
    "prefix": "auth.",
    "options": {
      "path": "/"
    }
  },
  "localStorage": {
    "prefix": "auth."
  },
  "defaultStrategy": "local"
}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // local
  $auth.registerStrategy('local', new RefreshScheme($auth, {
  "token": {
    "property": "access_token",
    "maxAge": 1800,
    "global": true
  },
  "refreshToken": {
    "property": "refresh_token",
    "data": "refresh_token",
    "maxAge": 2592000
  },
  "user": {
    "property": false
  },
  "endpoints": {
    "login": {
      "url": "/auth/github",
      "method": "post"
    },
    "refresh": {
      "url": "/auth/token/refresh",
      "method": "post"
    },
    "user": {
      "url": "/auth/user",
      "method": "get"
    },
    "logout": {
      "url": "/auth/logout/",
      "method": "post"
    }
  },
  "name": "local"
}))

  // github
  $auth.registerStrategy('github', new Oauth2Scheme($auth, {
  "clientId": "ec3c854c04b0fedc22ea",
  "redirectUri": "http://3.37.199.195/auth/github",
  "name": "github",
  "endpoints": {
    "authorization": "https://github.com/login/oauth/authorize",
    "token": "/_auth/oauth/github/authorize",
    "userInfo": "https://api.github.com/user"
  },
  "scope": [
    "user",
    "email"
  ],
  "responseType": "code"
}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      // Don't console log expired auth session errors. This error is common, and expected to happen.
      // The error happens whenever the user does an ssr request (reload/initial navigation) with an expired refresh
      // token. We don't want to log this as an error.
      if (error instanceof ExpiredAuthSessionError) {
        return
      }

      console.error('[ERROR] [AUTH]', error)
    }
  })
}
