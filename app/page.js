'use client'
import Image from 'next/image'
import Slider from './slider'
import Cards from './cards'
import Editorial from './editorial'
import { Fragment } from 'react'

export default function Home() {
  return (
    <main>
     <div className='-mt-[120px] z-1'>
       <Slider/>
     </div>
    
    <div className='-mt-[60px] z-2'>
      <Cards/>
    </div>
    <Editorial/>
      
    </main>
  )
}
