import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { authConfig } from './auth.config'

const apiUrl = process.env.API_URL

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          console.log('credentials', credentials)
          const response = await fetch(`${apiUrl}/users/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
          })

          if (response.ok) {
            const json = await response.json()
            console.log(json)

            return json
          }

          return null
        } catch (e) {
          console.log(e)
          return null
        }
      },
    }),
  ],
})
