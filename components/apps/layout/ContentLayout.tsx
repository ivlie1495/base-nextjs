import { PropsWithChildren } from 'react'

import Header from '../Header'

interface Props extends PropsWithChildren {
  title: string
}

const ContentLayout = ({ title, children }: Props) => {
  return (
    <>
      <Header title={title} />
      <main className="flex flex-1 flex-col gap-4 p-6 md:gap-8">
        {children}
      </main>
    </>
  )
}

export default ContentLayout
