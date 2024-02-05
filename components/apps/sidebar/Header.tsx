import Link from 'next/link'

import CompanyIcon from '@/components/icons/Company'

const SideBarHeader = () => {
  return (
    <Link className="flex items-center gap-2 font-semibold" href="#">
      <CompanyIcon className="h-6 w-6" />
      Acme Inc
    </Link>
  )
}

export default SideBarHeader
