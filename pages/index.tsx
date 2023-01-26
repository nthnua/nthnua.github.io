import Head from 'next/head'
import useMousePosition from '@/hooks/MousePositionHook'
import { Open_Sans, Poppins } from '@next/font/google'
import { useRef } from 'react'

const poppins = Poppins({ subsets: ['latin'], weight: '700' })
const open_sans = Open_Sans({ subsets: ['latin'], weight: '300' })

export default function Home() {
  const { x, y } = useMousePosition()
  return (
    <>
      <Head>
        <title>Home: nthnua</title>
        <meta name="description" content="Profile: nthnua" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 id='name' style={poppins.style}>
          Nuthan Hegde
        </h1>
        <div className='cursor' style={{
          transform: `translateX(${x}px) translateY(${y}px)`
        }} >
        </div>
      </main>
    </>
  )
}
