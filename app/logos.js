'use client'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';

export default function Logos() {
  return (
    
    <>
      <div className='text-center pt-20 pb-20'>
       
       <p className='uppercase oswald text-4xl '>
            <span className='pr-2 font-semibold'>ils nous font</span>
            <span className='font-light'>confiance</span>
      </p>

      </div>

      <Swiper style={{ height: '120px' }}
       modules={[Navigation, Pagination, Autoplay]}
       spaceBetween={0}
       slidesPerView={5}
       navigation
       pagination={{ clickable: true, dynamicBullets: true  }}
       observer={true}
       observeParents={true}
      //  autoplay={{
      //   "delay": 5000,
      //   "disableOnInteraction": false
      // }}
       >

      <SwiperSlide>
        <Image
              className="mx-auto"
              src="/images/logos/1.jpg"
              alt="Mecotec"
              width={180}
              height={57}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
              className="mx-auto"
              src="/images/logos/2.jpg"
              alt="Mecotec"
              width={180}
              height={57}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
              className="mx-auto"
              src="/images/logos/3.jpg"
              alt="Mecotec"
              width={180}
              height={57}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
              className="mx-auto"
              src="/images/logos/4.jpg"
              alt="Mecotec"
              width={180}
              height={57}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
              className="mx-auto"
              src="/images/logos/5.jpg"
              alt="Mecotec"
              width={180}
              height={57}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
              className="mx-auto"
              src="/images/logos/6.jpg"
              alt="Mecotec"
              width={180}
              height={57}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
              className="mx-auto"
              src="/images/logos/7.jpg"
              alt="Mecotec"
              width={180}
              height={57}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
              className="mx-auto"
              src="/images/logos/8.jpg"
              alt="Mecotec"
              width={180}
              height={57}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
              className="mx-auto"
              src="/images/logos/9.jpg"
              alt="Mecotec"
              width={180}
              height={57}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
              className="mx-auto"
              src="/images/logos/10.jpg"
              alt="Mecotec"
              width={180}
              height={57}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
              className="mx-auto"
              src="/images/logos/11.jpg"
              alt="Mecotec"
              width={180}
              height={57}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
              className="mx-auto"
              src="/images/logos/12.jpg"
              alt="Mecotec"
              width={180}
              height={57}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
              className="mx-auto"
              src="/images/logos/13.jpg"
              alt="Mecotec"
              width={180}
              height={57}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
              className="mx-auto"
              src="/images/logos/14.jpg"
              alt="Mecotec"
              width={180}
              height={57}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
              className="mx-auto"
              src="/images/logos/15.jpg"
              alt="Mecotec"
              width={180}
              height={57}
        />
      </SwiperSlide>
        
        </Swiper>
 
      {/* <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            className="col-span-2 lg:col-span-1 mx-auto"
            src="/images/logos/1.jpg"
            alt="Mecotec"
            width={180}
            height={57}
          />
          <Image
            className="col-span-2 lg:col-span-1 mx-auto"
            src="/images/logos/2.jpg"
            alt="Rebalance"
            width={180}
            height={57}
          />
          <Image
            className="col-span-2 lg:col-span-1 mx-auto"
            src="/images/logos/3.jpg"
            alt="LPG"
            width={180}
            height={57}
          />
          <Image
            className="col-span-2 lg:col-span-1 mx-auto"
            src="/images/logos/4.jpg"
            alt="Pole santé"
            width={180}
            height={57}
          />
          <Image
            className="col-span-2 lg:col-span-1 mx-auto"
            src="/images/logos/5.jpg"
            alt="PSG"
            width={180}
            height={57}
          />
            <Image
            className="col-span-2 lg:col-span-1 mx-auto"
            src="/images/logos/6.jpg"
            alt="Johnson & johnson"
            width={180}
            height={57}
          />
            <Image
            className="col-span-2 lg:col-span-1 mx-auto"
            src="/images/logos/7.jpg"
            alt="Bebo"
            width={180}
            height={57}
          />
            <Image
            className="col-span-2 lg:col-span-1 mx-auto"
            src="/images/logos/8.jpg"
            alt="Cerballiance"
            width={180}
            height={57}
          />
                <Image
            className="col-span-2 lg:col-span-1 mx-auto"
            src="/images/logos/9.jpg"
            alt="Cryorecup"
            width={180}
            height={57}
          />
            <Image
            className="col-span-2 lg:col-span-1 mx-auto"
            src="/images/logos/10.jpg"
            alt="Depuy"
            width={180}
            height={57}
          />
        </div> */}
      
    </>
  )
}
