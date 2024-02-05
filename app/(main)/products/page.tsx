'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import ContentLayout from '@/components/apps/layout/ContentLayout'
import AppTable from '@/components/apps/AppTable'
import { Button } from '@/components/ui/button'
import { TableHead, TableRow, TableCell } from '@/components/ui/table'
import { Input } from '@/components/ui/input'

export default function Products() {
  const { push } = useRouter()

  return (
    <ContentLayout title="Products">
      <Input placeholder="Search by Product Name" />
      <div className="border shadow-sm rounded-lg">
        <AppTable
          header={
            <TableRow>
              <TableHead className="table-cell font-bold">Image</TableHead>
              <TableHead className="table-cell font-bold">
                Product Name
              </TableHead>
              <TableHead className="hidden md:table-cell font-bold">
                Price
              </TableHead>
              <TableHead className="hidden md:table-cell font-bold">
                Stock Quantity
              </TableHead>
              <TableHead className="font-bold">Actions</TableHead>
            </TableRow>
          }
          body={
            <>
              <TableRow>
                <TableCell>
                  <Image
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src="https://picsum.photos/200"
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">Glimmer Lamps</TableCell>
                <TableCell className="hidden md:table-cell">$49.99</TableCell>
                <TableCell>500 in stock</TableCell>
                <TableCell className="hidden md:table-cell">
                  <Button
                    className="mr-2"
                    size="sm"
                    variant="outline"
                    onClick={() => push('/products/123')}
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
                <TableCell>
                  <Image
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src="https://picsum.photos/200"
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">Aqua Filters</TableCell>
                <TableCell className="hidden md:table-cell">$29.99</TableCell>
                <TableCell>750 in stock</TableCell>
                <TableCell className="hidden md:table-cell">
                  <Button
                    className="mr-2"
                    size="sm"
                    variant="outline"
                    onClick={() => push('/products/123')}
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
                <TableCell>
                  <Image
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src="https://picsum.photos/200"
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">Eco Planters</TableCell>
                <TableCell className="hidden md:table-cell">$19.99</TableCell>
                <TableCell>300 in stock</TableCell>
                <TableCell className="hidden md:table-cell">
                  <Button
                    className="mr-2"
                    size="sm"
                    variant="outline"
                    onClick={() => push('/products/123')}
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
