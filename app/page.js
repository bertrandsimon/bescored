'use client'
import Image from 'next/image'
import Slider from './slider'
import Cards from './cards'
import Editorial from './editorial'
import Method from './method'
import Stats from './stats'
import Content from './content'
import Logos from './logos'
import Testimonials from './testimonials'
import News from './news'
import { Fragment } from 'react'

export default function Home() {
  return (
    <main>

     <div className='-mt-[120px] z-1'>
       <Slider/>
     </div>
    
    <div className='mt-20 sm:-mt-[60px] z-2'>
      <Cards/>
    </div>

    <Editorial/>
    <Method/>
    <Stats/>  
    <Content/>
    <Logos/>
    <Testimonials/>
    <News/>

    </main>
  )
}
