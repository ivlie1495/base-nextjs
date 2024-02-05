import ProductIcon from '@/components/icons/Product'
import ShoppingCartIcon from '@/components/icons/ShoppingCart'
import CustomerIcon from '@/components/icons/Customer'
// import SettingIcon from '@/components/icons/Setting'
import DashboardIcon from '@/components/icons/Dashboard'
import LineChartIcon from '@/components/icons/LineChart'

import MenuItem from './MenuItem'
// import CollapsibleMenu from './CollapsibleMenu'

const menus = [
  { text: 'Dashboard', href: '/', Icon: DashboardIcon },
  { text: 'Products', href: '/products', Icon: ProductIcon },
  { text: 'Orders', href: '/orders', Icon: ShoppingCartIcon },
  { text: 'Sales', href: '/sales', Icon: LineChartIcon },
  { text: 'Customers', href: '/customers', Icon: CustomerIcon },
  // {
  //   text: 'Settings',
  //   href: '/settings',
  //   Icon: SettingIcon,
  //   menuItems: [
  //     { text: 'Profile', href: '/settings/profile' },
  //     { text: 'Theme', href: '/settings/theme' },
  //   ],
  // },
  // { text: 'Logout', href: '/login', Icon: CustomerIcon },
]

const SideBarMenu = () => {
  return (
    <div>
      <nav className="grid items-start px-4 text-sm font-medium">
        {menus.map(({ text, href, Icon }) => {
          return (
            <MenuItem
              key={text}
              text={text}
              href={href}
              icon={<Icon className="h-4 w-4" />}
            />
          )
          // if (!menuItems) {
          //   return (
          //     <MenuItem
          //       key={text}
          //       text={text}
          //       href={href}
          //       icon={<Icon className="h-4 w-4" />}
          //     />
          //   )
          // }

          // return (
          //   <CollapsibleMenu
          //     key={text}
          //     parentText={text}
          //     parentHref={href}
          //     parentIcon={<Icon className="h-4 w-4" />}
          //     menus={menuItems}
          //   />
          // )
        })}
      </nav>
    </div>
  )
}

export default SideBarMenu
