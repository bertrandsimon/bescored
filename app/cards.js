import Image from 'next/image'
import { useState } from 'react'

export default function Cards() {

  const [card1, setCard1] = useState('card1.jpg')
  const [card2, setCard2] = useState('card2.jpg')
  const [card3, setCard3] = useState('card3.jpg')

  // const handleMouseOver = () = {}

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
        <div className='relative w-auto cursor-pointer'>
          <Image className="absolute top-0 left-0 w-auto rounded-xl drop-shadow-lg transition-opacity duration-500" src={`/images/${card1}`} width={239} height={328} alt="Card" />
          
          <Image 
            className="w-auto rounded-xl drop-shadow-lg transition-opacity duration-300" 
            src={`/images/card1b.jpg`} 
            width={239} 
            height={328} 
            alt="Card"
            onMouseEnter={() => setCard1('card1b.jpg')}
            onMouseLeave={() => setCard1('card1.jpg')}
            style={{ opacity: card1 === 'card1b.jpg' ? 1 : 0 }}
          />
        </div>
      </div>
      
      <div className='col-span-2'>
        <div className='relative w-auto cursor-pointer'>
            <Image className="absolute top-0 left-0 w-auto rounded-xl drop-shadow-lg transition-opacity duration-500" src={`/images/${card2}`} width={239} height={328} alt="Card" />
            
            <Image 
              className="w-auto rounded-xl drop-shadow-lg transition-opacity duration-300" 
              src={`/images/card2b.jpg`} 
              width={239} 
              height={328} 
              alt="Card"
              onMouseEnter={() => setCard2('card2b.jpg')}
              onMouseLeave={() => setCard2('card2.jpg')}
              style={{ opacity: card2 === 'card2b.jpg' ? 1 : 0 }}
            />
          </div>
      </div>

      <div className='col-span-2'>
          <div className='relative w-auto cursor-pointer'>
            <Image className="absolute top-0 left-0 w-auto rounded-xl drop-shadow-lg transition-opacity duration-500" src={`/images/${card3}`} width={239} height={328} alt="Card" />
            
            <Image 
              className="w-auto rounded-xl drop-shadow-lg transition-opacity duration-300" 
              src={`/images/card3b.jpg`} 
              width={239} 
              height={328} 
              alt="Card"
              onMouseEnter={() => setCard3('card3b.jpg')}
              onMouseLeave={() => setCard3('card3.jpg')}
              style={{ opacity: card3 === 'card3b.jpg' ? 1 : 0 }}
            />
          </div>
      </div>


     </div>
      

  )
}
