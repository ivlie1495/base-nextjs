'use client'

import { useRouter } from 'next/navigation'

import ContentLayout from '@/components/apps/layout/ContentLayout'
import AppTable from '@/components/apps/AppTable'
import { Button } from '@/components/ui/button'
import { TableHead, TableRow, TableCell } from '@/components/ui/table'
import { Input } from '@/components/ui/input'

export default function Customers() {
  const { push } = useRouter()

  return (
    <ContentLayout title="Customers">
      <Input placeholder="Search by Customer Name" />
      <div className="border shadow-sm rounded-lg">
        <AppTable
          header={
            <TableRow>
              <TableHead className="font-bold table-cell">
                Customer Name
              </TableHead>
              <TableHead className="hidden md:table-cell font-bold">
                Email
              </TableHead>
              <TableHead className="hidden md:table-cell font-bold">
                Phone
              </TableHead>
              <TableHead className="font-bold">Actions</TableHead>
            </TableRow>
          }
          body={
            <>
              <TableRow>
                <TableCell className="font-medium">John Doe</TableCell>
                <TableCell className="hidden md:table-cell">
                  john.doe@example.com
                </TableCell>
                <TableCell>+1 234 567 890</TableCell>
                <TableCell className="hidden md:table-cell">
                  <Button
                    className="mr-2"
                    size="sm"
                    variant="outline"
                    onClick={() => push('/customers/123')}
                  >
                    Edit
                  </Button>
                  <Button
                    className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                    size="sm"
                    variant="outline"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Jane Smith</TableCell>
                <TableCell className="hidden md:table-cell">
                  jane.smith@example.com
                </TableCell>
                <TableCell>+1 098 765 4321</TableCell>
                <TableCell className="hidden md:table-cell">
                  <Button
                    className="mr-2"
                    size="sm"
                    variant="outline"
                    onClick={() => push('/customers/123')}
                  >
                    Edit
                  </Button>
                  <Button
                    className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                    size="sm"
                    variant="outline"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Bob Johnson</TableCell>
                <TableCell className="hidden md:table-cell">
                  bob.johnson@example.com
                </TableCell>
                <TableCell>+1 123 456 7890</TableCell>
                <TableCell className="hidden md:table-cell">
                  <Button
                    className="mr-2"
                    size="sm"
                    variant="outline"
                    onClick={() => push('/customers/123')}
                  >
                    Edit
                  </Button>
                  <Button
                    className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                    size="sm"
                    variant="outline"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            </>
          }
        />
      </div>
    </ContentLayout>
  )
}
