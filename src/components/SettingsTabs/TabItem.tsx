'use client'

import * as Tabs from '@radix-ui/react-tabs'

interface TabItemProps {
  value: string
  title: string
}

export function TabItem({ value, title }: TabItemProps) {
  return (
    <Tabs.Trigger
      className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
      value={value}
    >
      <span>{title}</span>

      <div className="absolute -bottom-px left-0 right-0 hidden h-0.5 bg-violet-700 group-data-[state=active]:block" />
    </Tabs.Trigger>
  )
}
