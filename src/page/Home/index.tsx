import { Nav } from '@/components/common/Nav'
import React from 'react'
import { Hero } from './Hero'
interface Props extends React.ComponentProps<'div'> {}

export const Home = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <Nav />
      <Hero />
    </div>
  )
}
