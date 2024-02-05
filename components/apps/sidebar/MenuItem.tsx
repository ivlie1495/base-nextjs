'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface Props {
  text: string
  href: string
  icon?: ReactNode
}

const MenuItem = ({ text, href, icon }: Props) => {
  const pathname = usePathname()

  return (
    <Link
      className={clsx({
        'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50':
          true,
        'bg-gray-100 text-gray-900':
          pathname === href || (href !== '/' && pathname.startsWith(href)),
      })}
      href={href}
    >
      {icon}
      {text}
    </Link>
  )
}

export default MenuItem
