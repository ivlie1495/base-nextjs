'use client'

import { useRouter } from 'next/navigation'

import ContentLayout from '@/components/apps/layout/ContentLayout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const ProductDetail = () => {
  const { push } = useRouter()

  return (
    <ContentLayout title="Edit Product">
      <div className="border shadow-sm rounded-lg p-6">
        <form className="grid gap-4" action={() => push('/products')}>
          <div className="flex flex-col">
            <Label className="font-medium mb-2" htmlFor="productName">
              Product Name
            </Label>
            <Input
              className="border rounded-lg p-2"
              defaultValue="Glimmer Lamps"
              id="productName"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <Label className="font-medium mb-2" htmlFor="productPrice">
              Price
            </Label>
            <Input
              className="border rounded-lg p-2"
              defaultValue="$49.99"
              id="productPrice"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <Label className="font-medium mb-2" htmlFor="stockQuantity">
              Stock Quantity
            </Label>
            <Input
              className="border rounded-lg p-2"
              defaultValue="500 in stock"
              id="stockQuantity"
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

export default ProductDetail
