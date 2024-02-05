'use client'

import { useRouter } from 'next/navigation'

import ContentLayout from '@/components/apps/layout/ContentLayout'
import AppTable from '@/components/apps/AppTable'
import { Button } from '@/components/ui/button'
import { TableHead, TableRow, TableCell } from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function Sales() {
  const { push } = useRouter()

  return (
    <ContentLayout title="Recent Sales">
      <Input placeholder="Search by Sale ID" />
      <div className="border shadow-sm rounded-lg">
        <AppTable
          header={
            <TableRow>
              <TableHead className="table-cell font-bold">Sale ID</TableHead>
              <TableHead className="hidden md:table-cell font-bold">
                Product Name
              </TableHead>
              <TableHead className="hidden md:table-cell font-bold">
                Date
              </TableHead>
              <TableHead className="hidden md:table-cell font-bold">
                Total Amount
              </TableHead>
              <TableHead className="hidden md:table-cell font-bold">
                Status
              </TableHead>
            </TableRow>
          }
          body={
            <TableRow>
              <TableCell className="font-medium">
                <Link href="/sales/3110" className="text-blue-500">
                  #S3210
                </Link>
              </TableCell>
              <TableCell className="hidden md:table-cell">Product A</TableCell>
              <TableCell className="hidden md:table-cell">
                February 20, 2024
              </TableCell>
              <TableCell className="hidden md:table-cell">$42.25</TableCell>
              <TableCell className="hidden md:table-cell text-green-500">
                Completed
              </TableCell>
            </TableRow>
          }
        />
      </div>
    </ContentLayout>
  )
}
