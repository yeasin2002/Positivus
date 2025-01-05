import { cn } from '@/utils'
import React from 'react'
interface Props extends React.ComponentProps<'div'> {}

export const MobileNav = ({ className, ...props }: Props) => {
  return <div id="mobile-device-nav" className={cn(className)} {...props}></div>
}
