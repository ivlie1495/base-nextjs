import { Button } from '@/components/ui/button'

const Pagination = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-end gap-4">
      <Button className="w-full sm:w-auto" variant="outline">
        Previous
      </Button>
      <Button className="w-full sm:w-auto">Next</Button>
    </div>
  )
}

export default Pagination
