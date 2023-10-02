import Image from 'next/image'

export default function Editorial() {
  return (
    
      <>
       <div className='text-center pt-20'>
          <p className='font-bold text-lg blue'>Amet amet eget sceleris</p>
          <p className='font-light text-4xl pt-4 oswald uppercase'>Nous évaluons les potentiels, nous révélons les bénéfices <br /> et nous optimisons les différentes recommandations. </p>
            <p className='font-sm font-extralight pt-4 max-w-2xl text-center mx-auto'>&ldquo;Fort de plus de 30 ans d&apos;expérience dans l&apos;optimisation de la performance sportive de haut niveau, Bescored propose également cette expertise dans les domaines de la santé, du bien être et de l&apos;entreprise.&rdquo;</p>
       </div>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 content-center h-56 w-full px-10 mt-80 mb-40 gap-10 sm:gap-0 sm:mt-20'>

        <div className='sm:cols-span-6'>
          <div className='flex justify-center items-center'>
            <div className='p-6 flex-shrink-0'><Image src="/images/editorial1.jpg" alt="editorial" width={145} height={108}/></div>
            <div>
              <p className='font-bold text-lg blue pb-3'>Expertise Santé</p>
              <span className='font-extralight'>“Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer esent at a. Ornare arcu.</span>
            </div>
          </div>
        </div>

        <div className='sm:cols-span-6'>
          <div className='flex justify-center items-center'>
            <div className='p-6 flex-shrink-0'><Image src="/images/editorial2.jpg" alt="editorial" width={145} height={108}/></div>
            <div>
              <p className='font-bold text-lg blue pb-3'>Expertise Sport</p>
              <span className='font-extralight'>“Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer esent at a. Ornare arcu.</span>
            </div>
          </div>
        </div>

        <div className='sm:cols-span-6'>
          <div className='flex justify-center items-center'>
            <div className='p-6 flex-shrink-0'><Image src="/images/editorial3.jpg" alt="editorial" width={145} height={108}/></div>
            <div>
              <p className='font-bold text-lg blue pb-3'>Expertise Médicale</p>
              <span className='font-extralight'>“Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer esent at a. Ornare arcu.</span>
            </div>
          </div>
        </div>

        <div className='sm:cols-span-6'>
          <div className='flex justify-center items-center'>
            <div className='p-6 flex-shrink-0'><Image src="/images/editorial4.jpg" alt="editorial" width={145} height={108}/></div>
            <div>
              <p className='font-bold text-lg blue pb-3'>Expertise Corporate</p>
              <span className='font-extralight'>“Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer esent at a. Ornare arcu.</span>
            </div>
          </div>
        </div>

       

      </div>

      </>
   
  )
}
