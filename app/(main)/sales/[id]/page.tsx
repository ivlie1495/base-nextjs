import Image from 'next/image'

import ContentLayout from '@/components/apps/layout/ContentLayout'
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from '@/components/ui/card'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

const SaleDetail = () => {
  return (
    <ContentLayout title="Order #3102 - Sophia Anderson on June 23, 2022">
      <div className="flex flex-col md:grid md:grid-cols-6 gap-6">
        <div className="md:col-span-4 lg:col-span-3 xl:col-span-4 flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Sale Details</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden md:table-cell">
                      Image
                    </TableHead>
                    <TableHead className="max-w-[150px]">Name</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="hidden md:table-cell">
                      <Image
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src="https://picsum.photos/200"
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">Glimmer Lamps</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>$60.00</TableCell>
                    <TableCell>$120.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="hidden md:table-cell">
                      <Image
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src="https://picsum.photos/200"
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">Aqua Filters</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>$49.00</TableCell>
                    <TableCell>$147.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2 lg:col-span-3 xl:col-span-2 flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center">
                <div>Status</div>
                <div className="ml-auto text-green-500">Completed</div>
              </div>
              <div className="flex items-center font-medium">
                <div>Total</div>
                <div className="ml-auto">$267.00</div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center gap-2">
              <Button className="w-full" size="sm">
                Print
              </Button>
              <Button className="w-full" size="sm" variant="outline">
                Cancel
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default SaleDetail
