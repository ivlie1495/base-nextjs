'use client'

import { HTMLAttributes } from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { ResponsiveLine } from '@nivo/line'
import { ResponsivePie } from '@nivo/pie'

import ContentLayout from '@/components/apps/layout/ContentLayout'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

function FilledtimeseriesChart(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: 'Desktop',
            data: [
              { x: 'Jan', y: 43 },
              { x: 'Feb', y: 137 },
              { x: 'Mar', y: 61 },
              { x: 'Apr', y: 145 },
              { x: 'May', y: 26 },
              { x: 'Jun', y: 154 },
            ],
          },
          {
            id: 'Mobile',
            data: [
              { x: 'Jan', y: 60 },
              { x: 'Feb', y: 48 },
              { x: 'Mar', y: 177 },
              { x: 'Apr', y: 78 },
              { x: 'May', y: 96 },
              { x: 'Jun', y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: 'point',
        }}
        yScale={{
          type: 'linear',
          min: 0,
          max: 'auto',
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={['#2563eb', '#e11d48']}
        pointSize={6}
        useMesh={true}
        curve="monotoneX"
        enableArea={true}
        gridYValues={6}
        defs={[
          {
            id: 'line-chart-gradient',
            type: 'linearGradient',
            colors: [
              { offset: 0, color: 'inherit' },
              { offset: 200, color: 'inherit', opacity: 0 },
            ],
          },
        ]}
        fill={[{ match: '*', id: 'line-chart-gradient' }]}
        theme={{
          tooltip: {
            chip: {
              borderRadius: '9999px',
            },
            container: {
              fontSize: '12px',
              textTransform: 'capitalize',
              borderRadius: '6px',
            },
          },
          grid: {
            line: {
              stroke: '#f3f4f6',
            },
          },
        }}
        role="application"
      />
    </div>
  )
}

function PieChart(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: 'Jan', value: 111 },
          { id: 'Feb', value: 157 },
          { id: 'Mar', value: 129 },
          { id: 'Apr', value: 150 },
          { id: 'May', value: 119 },
          { id: 'Jun', value: 72 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={'#ffffff'}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={'#ffffff'}
        arcLabelsRadiusOffset={0.65}
        colors={['#2563eb']}
        theme={{
          labels: {
            text: {
              fontSize: '18px',
            },
          },
          tooltip: {
            chip: {
              borderRadius: '9999px',
            },
            container: {
              fontSize: '12px',
              textTransform: 'capitalize',
              borderRadius: '6px',
            },
          },
        }}
        role="application"
      />
    </div>
  )
}

function StackedbarChart(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: 'Jan', desktop: 111, mobile: 99 },
          { name: 'Feb', desktop: 157, mobile: 87 },
          { name: 'Mar', desktop: 129, mobile: 89 },
          { name: 'Apr', desktop: 187, mobile: 151 },
          { name: 'May', desktop: 119, mobile: 127 },
          { name: 'Jun', desktop: 20, mobile: 121 },
        ]}
        keys={['desktop', 'mobile']}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={['#2563eb', '#e11d48']}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: '9999px',
            },
            container: {
              fontSize: '12px',
              textTransform: 'capitalize',
              borderRadius: '6px',
            },
          },
          grid: {
            line: {
              stroke: '#f3f4f6',
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A stacked bar chart"
      />
    </div>
  )
}

export default function Home() {
  return (
    <ContentLayout title="Dashboard">
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle>$2389.00</CardTitle>
          </CardHeader>
          <CardContent>
            <StackedbarChart className="aspect-[4/3]" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Total Orders</CardDescription>
            <CardTitle>1234</CardTitle>
          </CardHeader>
          <CardContent>
            <FilledtimeseriesChart className="aspect-[4/3]" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Average Order Value</CardDescription>
            <CardTitle>$19.99</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart className="aspect-[4/3]" />
          </CardContent>
        </Card>
      </div>
      <h2 className="font-semibold text-lg md:text-xl">Top Selling Products</h2>
      <div className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Units Sold</TableHead>
              <TableHead>Revenue</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Product 1</TableCell>
              <TableCell>100</TableCell>
              <TableCell>$1000.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Product 2</TableCell>
              <TableCell>200</TableCell>
              <TableCell>$2000.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Product 3</TableCell>
              <TableCell>300</TableCell>
              <TableCell>$3000.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </ContentLayout>
  )
}
