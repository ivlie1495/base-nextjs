import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnDashboard = nextUrl.pathname.startsWith('/')
      const isOnAtuh = nextUrl.pathname.startsWith('/auth')

      if (isLoggedIn && isOnAtuh) {
        return Response.redirect(new URL('/', nextUrl))
      }

      if (isOnDashboard && isLoggedIn) {
        return true
      }

      return false
    },
  },
  providers: [],
} satisfies NextAuthConfig
