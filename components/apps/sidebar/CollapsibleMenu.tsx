'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import ChevronDownIcon from '@/components/icons/ChevronDown'

import MenuItem from './MenuItem'

interface Props {
  parentText: string
  parentHref: string
  parentIcon: ReactNode
  menus: {
    text: string
    href: string
  }[]
}

const CollapsibleMenu = ({
  parentText,
  parentHref,
  parentIcon,
  menus,
}: Props) => {
  const pathname = usePathname()

  return (
    <Collapsible defaultOpen={pathname.startsWith(parentHref)}>
      <CollapsibleTrigger asChild className="cursor-pointer">
        <div className="flex items-center justify-between px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'">
          <div className="flex items-center gap-3">
            {parentIcon}
            {parentText}
          </div>
          <ChevronDownIcon className="w-4 h-4" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="ml-7">
        {menus.map((menu) => (
          <MenuItem key={menu.text} {...menu} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}

export default CollapsibleMenu
