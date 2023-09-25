import Image from 'next/image'
import { useState } from 'react'

export default function Cards() {



  return (

     <div className='grid grid-cols-12 px-4 gap-4'>

      <div className='col-span-4'>
        <div className='p-10 pt-24'>
          <p className='font-light italic'>“ Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Quia sapiente enim dolorem temporibus eligendi! Fuga libero cumque, cum sed, excepturi “</p>
          <Image className="w-auto pt-8" src="/images/signature.jpg" width={355} height={108} alt="Signature"/>
        </div>
      
      </div>
      
      <div className='col-span-1'>
     
      </div>

      <div className='col-span-2'>
        <Image className="w-auto cursor-pointer" src="/images/card1.png" width={239} height={328} alt="Card"/>
      </div>
      
      <div className='col-span-2'>
        <Image className="w-auto cursor-pointer" src="/images/card2.png" width={239} height={328} alt="Card"/>
      </div>

      <div className='col-span-2'>
        <Image className="w-auto cursor-pointer" src="/images/card3.png" width={239} height={328} alt="Card"/>
      </div>


     </div>
      

  )
}
