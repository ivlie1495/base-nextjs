import { PropsWithChildren } from 'react'

import SideBar from '@/components/apps/sidebar'

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid lg:min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <SideBar />
      <div className="flex flex-col">{children}</div>
    </div>
  )
}

export default AppLayout
