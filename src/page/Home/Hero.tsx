import React from 'react'

interface Props extends React.ComponentProps<'div'> {}

export const Hero = ({ ...rest }: Props) => {
  return (
    <div className="grid min-h-screen place-items-center" {...rest}>
      <h1 className="text-center text-4xl font-bold">
        React TypeScript TailwindCSS Templates with Vite
      </h1>
      <p className="text-center text-2xl">
        Md Kawsar Islam Yeasin (@yeasin2002)
      </p>
    </div>
  )
}
