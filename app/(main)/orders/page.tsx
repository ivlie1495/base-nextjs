import ContentLayout from '@/components/apps/layout/ContentLayout'

import Filter from './Filter'
import Content from './Content'
import Pagination from './Pagination'

export default function Orders() {
  return (
    <ContentLayout title="Recent Orders">
      <Filter />
      <Content />
      <Pagination />
    </ContentLayout>
  )
}
