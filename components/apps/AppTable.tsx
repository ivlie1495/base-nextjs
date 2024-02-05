import { TableHeader, TableBody, Table } from '@/components/ui/table'
import { ReactNode } from 'react'

interface Props {
  header: ReactNode
  body: ReactNode
}

const AppTable = ({ header, body }: Props) => {
  return (
    <Table>
      <TableHeader>{header}</TableHeader>
      <TableBody>{body}</TableBody>
    </Table>
  )
}

export default AppTable
