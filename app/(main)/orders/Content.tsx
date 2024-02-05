import clsx from 'clsx'
import Link from 'next/link'

import { TableHead, TableRow, TableCell } from '@/components/ui/table'
import AppTable from '@/components/apps/AppTable'

const items = [
  {
    id: 3210,
    name: 'Olivia Martin',
    date: 'February 20, 2024',
    total: '42.25',
    status: 'Shipped',
  },
  {
    id: 3209,
    name: 'Ava Johnson',
    date: 'January 5, 2024',
    total: '74.99',
    status: 'Paid',
  },
  {
    id: 3204,
    name: 'Michael Johnson',
    date: 'August 3, 2023',
    total: '64.75',
    status: 'Unfulfilled',
  },
  {
    id: 3203,
    name: 'Lisa Anderson',
    date: 'July 15, 2023',
    total: '34.50',
    status: 'Shipped',
  },
  {
    id: 3202,
    name: 'Samantha Green',
    date: 'June 5, 2023',
    total: '89.99',
    status: 'Paid',
  },
  {
    id: 3201,
    name: 'Adam Barlow',
    date: 'May 20, 2023',
    total: '24.99',
    status: 'Unfulfilled',
  },
  {
    id: 3207,
    name: 'Sophia Anderson',
    date: 'November 2, 2023',
    total: '99.99',
    status: 'Paid',
  },
  {
    id: 3206,
    name: 'Daniel Smith',
    date: 'October 7, 2023',
    total: '67.50',
    status: 'Shipped',
  },
]

const headers = [
  { text: 'Order ID', optionalClassName: 'table-cell' },
  { text: 'Customer Name', optionalClassName: 'hidden sm:table-cell' },
  { text: 'Date', optionalClassName: 'hidden md:table-cell' },
  { text: 'Total Amount', optionalClassName: 'hidden lg:table-cell' },
  { text: 'Status', optionalClassName: 'hidden xl:table-cell' },
]

const Content = () => {
  return (
    <div className="border shadow-sm rounded-lg p-2 overflow-x-auto">
      <AppTable
        header={
          <TableRow>
            {headers.map(({ text, optionalClassName }) => (
              <TableHead
                key={text}
                className={clsx(['font-bold', optionalClassName])}
              >
                {text}
              </TableHead>
            ))}
          </TableRow>
        }
        body={items.map(({ id, name, date, total, status }) => (
          <TableRow key={id}>
            <TableCell className="font-medium">
              <Link href={`/orders/${id}`} className="text-blue-500">
                #{id}
              </Link>
              <div className="xl:hidden">
                <p className="sm:hidden">Customer Name: {name}</p>
                <p className="md:hidden">Date: {date}</p>
                <p className="lg:hidden">Total Amount: ${total}</p>
                <p className="xl:hidden">
                  Status:{' '}
                  <span
                    className={clsx({
                      'text-green-500': status === 'Paid',
                      'text-yellow-500': status === 'Shipped',
                      'text-red-500': status === 'Unfulfilled',
                    })}
                  >
                    {status}
                  </span>
                </p>
              </div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">{name}</TableCell>
            <TableCell className="hidden md:table-cell">{date}</TableCell>
            <TableCell className="hidden lg:table-cell">${total}</TableCell>
            <TableCell
              className={clsx({
                'hidden xl:table-cell': true,
                'text-green-500': status === 'Paid',
                'text-yellow-500': status === 'Shipped',
                'text-red-500': status === 'Unfulfilled',
              })}
            >
              {status}
            </TableCell>
          </TableRow>
        ))}
      />
    </div>
  )
}

export default Content
