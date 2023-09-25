import Image from 'next/image'

export default function Slider() {
  return (

      <div className='h-[580px] max-h-128 bg-hero-pattern bg-cover'>
    
        <div className='flex pt-[230px] w-full justify-around items-center'>

          <div className='text-white uppercase oswald pl-[200px]'>
            <p className='text-sm p-1'>25 ans d&rsquo;experience</p>
            <p className='text-5xl p-1 font-extralight'>centre d&rsquo;expertise</p>
            <p className='text-5xl p-1 font-semibold'>scentifique</p>
            <div className='pt-4'><button className='btn btn-blue'>call to action</button></div>
           
          </div>

          <div className=''>
            <Image 
            src="/images/tag1.png"
            width={220}
            height={50}
            alt="Tag"
            />
          </div>

        </div>

      </div>
   
  )
}
