'use client'

import { useRouter } from 'next/navigation'

import ContentLayout from '@/components/apps/layout/ContentLayout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const CustomerDetail = () => {
  const { push } = useRouter()

  return (
    <ContentLayout title="Edit Product">
      <div className="border shadow-sm rounded-lg p-6">
        <form className="grid gap-4" action={() => push('/customers')}>
          <div className="flex flex-col">
            <Label className="font-medium mb-2" htmlFor="customerName">
              Customer Name
            </Label>
            <Input
              className="border rounded-lg p-2"
              defaultValue="John Doe"
              id="customerName"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <Label className="font-medium mb-2" htmlFor="email">
              Email
            </Label>
            <Input
              className="border rounded-lg p-2"
              defaultValue="john.doe@example.com"
              id="email"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <Label className="font-medium mb-2" htmlFor="phone">
              Phone
            </Label>
            <Input
              className="border rounded-lg p-2"
              defaultValue="+1 234 567 890"
              id="phone"
              type="text"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-end gap-4">
            <Button size="sm" variant="outline" className="w-full sm:w-auto">
              Cancel
            </Button>
            <Button size="sm" className="w-full sm:w-auto">
              Save
            </Button>
          </div>
        </form>
      </div>
    </ContentLayout>
  )
}

export default CustomerDetail
