import SideBarHeader from './Header'
import SideBarMenu from './Menus'

const SideBar = () => {
  return (
    <div className="border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex flex-col gap-2">
        <div className="flex h-[60px] items-center px-6">
          <SideBarHeader />
        </div>
        <div className="flex-1">
          <SideBarMenu />
        </div>
      </div>
    </div>
  )
}

export default SideBar
