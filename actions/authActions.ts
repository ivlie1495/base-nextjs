'use server'

import { signIn, signOut } from '@/auth'
import { AuthError } from 'next-auth'

type Inputs = {
  email: string
  password: string
}

export const signInAction = async (data: Inputs) => {
  try {
    await signIn('credentials', data)
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}

export const signOutAction = async () => {
  await signOut()
}
