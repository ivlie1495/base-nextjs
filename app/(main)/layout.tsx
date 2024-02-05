import AppLayout from '@/components/apps/layout/AppLayout'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AppLayout>{children}</AppLayout>
}
