
import styles from './Slider.module.css'
import Image from 'next/image'
import { Fragment } from 'react'
import { useState, useEffect } from 'react'

export default function Slider() {

  const [imgNb, setImgNb] = useState(0)
  

  useEffect(() => {
    const changeSlide = () => {
      setImgNb(prevImgNb => (prevImgNb + 1) % bgImages.length);
    }

    const intervalId = setInterval(changeSlide, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  // console.log(imgNb)

  // const imgBg1  = '/images/sante-bg.jpg'
  // const imgBg2  = '/images/sport-bg.jpg'

  const bgImages =[
    
    { 
      imgBg : '/images/sante-bg.jpg',
      txt1 : '30 ans d&rsquo;experience',
      txt2 : 'centre d&rsquo;expertise',
      txt3 : 'scentifique',
      tag : '/images/tag1.png',
    },
    { 
      imgBg : '/images/sport-bg.jpg',
      txt1 : '30 ans d&rsquo;experience',
      txt2 : 'centre d&rsquo;expertise',
      txt3 : 'scentifique',
      tag : '/images/tag2.png',
    },
    { 
      imgBg : '/images/corporate-bg.jpg',
      txt1 : '30 ans d&rsquo;experience',
      txt2 : 'centre d&rsquo;expertise',
      txt3 : 'scentifique',
      tag : '/images/tag2.png',
    },
  ]




  return (

    <>

  

    <div style={{ backgroundImage: `url(${bgImages[imgNb].imgBg})`, height: '580px' }} className="aspect-auto max-h-128 bg-cover rounded-b-lg">

   
        <div className='flex pt-[230px] w-full justify-around items-center'>

          <div className='text-white uppercase oswald pl-[60px]'>
            <p className='text-sm p-1'>30 ans d&rsquo;experience</p>
            <p className='text-5xl p-1 font-extralight'>centre d&rsquo;expertise</p>
            <p className='text-5xl p-1 font-semibold'>scentifique</p>
            <div className='pt-4'><button className='btn btn-blue'>call to action</button></div>
           
          </div>

          <div className='flex-shrink-0'>
            <Image 
            src= {bgImages[imgNb].tag}
            width={220}
            height={50}
            alt="Tag"
            />
          </div>

        </div>

      </div>
   
      </>
  )
}
