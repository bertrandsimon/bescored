import Image from 'next/image'
import Slider from './slider'
import { Fragment } from 'react'

export default function Home() {
  return (
    <main>
     <div className='-mt-[120px] z-1'>
       <Slider/>
     </div>
      
    </main>
  )
}
