
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

    const intervalId = setInterval(changeSlide, 7000);

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
      txt1 : `30 ans d'experience`,
      txt2 : `centre d'expertise`,
      txt3 : 'scentifique',
      tag : '/images/tag1.png',
    },
    { 
      imgBg : '/images/sport-bg.jpg',
      txt1 : `30 ans d'experience`,
      txt2 : 'performance',
      txt3 : 'et récupération',
      tag : '/images/tag2.png',
    },
    { 
      imgBg : '/images/corporate-bg.jpg',
      txt1 : `30 ans d'experience`,
      txt2 : 'santé mentale',
      txt3 : 'en entreprise',
      tag : '/images/tag3.png',
    },
  ]




  return (

    <>

  

    <div style={{ backgroundImage: `url(${bgImages[imgNb].imgBg})`, height: '580px' }} className="aspect-auto max-h-128 bg-cover rounded-b-lg">

   
        <div className='flex pt-[230px] w-full items-center justify-center sm:justify-around'>

          <div className='text-white uppercase oswald sm:pl-[60px]'>
            <p className='text-sm p-1'>{bgImages[imgNb].txt1}</p>
            <p className='text-5xl p-1 font-extralight'>{bgImages[imgNb].txt2}</p>
            <p className='text-5xl p-1 font-semibold'>{bgImages[imgNb].txt3}</p>
            <div className='pt-4'><button className='btn btn-blue cursor-pointer'>en savoir +</button></div>
           
          </div>

          <div className='sm:flex-shrink-0 hidden sm:flex'>
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
