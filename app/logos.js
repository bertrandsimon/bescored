import Image from 'next/image'

export default function Logos() {
  return (
    
    <>
      <div className='text-center pt-20 pb-10'>
       
       <p className='uppercase oswald text-4xl '>
            <span className='pr-2 font-semibold'>ils nous font</span>
            <span className='font-light'>confiance</span>
      </p>

      </div>

      <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale-50"
            src="/images/logos/1.jpg"
            alt="Mecotec"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/images/logos/2.jpg"
            alt="Rebalance"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/images/logos/3.jpg"
            alt="LPG"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="/images/logos/4.jpg"
            alt="Pole santé"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/images/logos/5.jpg"
            alt="PSG"
            width={158}
            height={48}
          />
            <Image
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/images/logos/6.jpg"
            alt="Johnson & johnson"
            width={158}
            height={48}
          />
            <Image
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/images/logos/7.jpg"
            alt="Bebo"
            width={158}
            height={48}
          />
            <Image
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/images/logos/8.jpg"
            alt="Cerballiance"
            width={158}
            height={48}
          />
                <Image
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/images/logos/9.jpg"
            alt="Cryorecup"
            width={158}
            height={48}
          />
            <Image
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/images/logos/10.jpg"
            alt="Depuy"
            width={158}
            height={48}
          />
        </div>
      
    </>
  )
}
