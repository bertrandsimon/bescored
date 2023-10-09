
import styles from './Slider.module.css'
import Image from 'next/image'
import { Fragment } from 'react'
import { useState, useEffect } from 'react'
import { Fade, Slide } from "react-awesome-reveal";


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


  const bgImages =[
    
    { 
      imgBg : '/images/sante-bg.jpg',
      txt1 : `30 ans d'experience`,
      txt2 : `centre d'expertise`,
      txt3 : 'scentifique',
      tag : '/images/tag1.png',
      bgPos : 'bg-center',
    },
    { 
      imgBg : '/images/sport-bg.jpg',
      txt1 : `30 ans d'experience`,
      txt2 : 'performance',
      txt3 : 'et récupération',
      tag : '/images/tag2.png',
      bgPos : 'bg-right',
    },
    { 
      imgBg : '/images/corporate-bg.jpg',
      txt1 : `30 ans d'experience`,
      txt2 : 'santé mentale',
      txt3 : 'en entreprise',
      tag : '/images/tag3.png',
      bgPos : 'bg-center',
    },
    { 
      imgBg : '/images/sport2-bg.jpg',
      txt1 : `30 ans d'experience`,
      txt2 : 'performance',
      txt3 : 'et récupération',
      tag : '/images/tag4.png',
      bgPos : 'bg-right',
    },
  ]




  return (

    <>

      {/* SLIDE 1 */}
      <div style={{ backgroundImage: `url('/images/sante-bg.jpg')`, height: '580px' }} className={`${bgImages[0].bgPos} aspect-auto max-h-128 bg-cover rounded-b-lg z-1`}>

          <div className='flex pt-[230px] w-full items-center justify-center sm:justify-around'>

            <div className='text-white uppercase oswald sm:pl-[60px]'>

              <Slide cascade damping="0.6" direction="right">
                <p className='text-sm p-1'>30 ans dexperience</p>
                <p className='text-5xl p-1 font-extralight'>centre dexpertise</p>
                <p className='text-5xl p-1 font-semibold'>scentifique</p>
                <div className='pt-4'><button className='btn btn-blue cursor-pointer'>en savoir +</button></div>
              </Slide>
              
            </div>

            <div className='sm:flex-shrink-0 hidden sm:flex'>
              <Image src= '/images/tag1.png' width={220} height={50} alt="Tag"/>
            </div>

          </div>

      </div>

            {/* SLIDE 2 */}
            <div style={{ backgroundImage: `url('/images/sante-bg.jpg')`, height: '580px' }} className={`${bgImages[0].bgPos} aspect-auto max-h-128 bg-cover rounded-b-lg z-1`}>

              <div className='flex pt-[230px] w-full items-center justify-center sm:justify-around'>

                <div className='text-white uppercase oswald sm:pl-[60px]'>

                  <Slide cascade damping="0.6" direction="right">
                    <p className='text-sm p-1'>30 ans experience</p>
                    <p className='text-5xl p-1 font-extralight'>centre expertise</p>
                    <p className='text-5xl p-1 font-semibold'>scentifique</p>
                    <div className='pt-4'><button className='btn btn-blue cursor-pointer'>en savoir +</button></div>
                  </Slide>
                  
                </div>

                <div className='sm:flex-shrink-0 hidden sm:flex'>
                  <Image src= '/images/tag1.png' width={220} height={50} alt="Tag"/>
                </div>

            </div>

            </div>

     
        
    


  
    {/* <Fade >
      <div style={{ backgroundImage: `url(${bgImages[imgNb].imgBg})`, height: '580px' }} className={`${bgImages[imgNb].bgPos} aspect-auto max-h-128 bg-cover rounded-b-lg`}>

    
          <div className='flex pt-[230px] w-full items-center justify-center sm:justify-around'>

            <div className='text-white uppercase oswald sm:pl-[60px]'>

            <Slide cascade damping="0.6" direction="right">
              <p className='text-sm p-1'>{bgImages[imgNb].txt1}</p>
              <p className='text-5xl p-1 font-extralight'>{bgImages[imgNb].txt2}</p>
              <p className='text-5xl p-1 font-semibold'>{bgImages[imgNb].txt3}</p>
              <div className='pt-4'><button className='btn btn-blue cursor-pointer'>en savoir +</button></div>
            </Slide>
            
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

     
        <div>

        </div>
    </Fade> */}
   
      </>
  )
}
