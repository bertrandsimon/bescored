'use client'

import Image from 'next/image'
import Link from 'next/link';


import { motion, AnimatePresence  } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import Slider from "react-slick";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Footer() {

  const image = [
    {
    src : '/images/medical-bg.jpg',
  },
  {
    src : '/images/medical-bg2.jpg',
  },
  ]

  const navigation = {
    solutions: [
      { name: 'Marketing', href: '#' },
      { name: 'Analytics', href: '#' },
      { name: 'Commerce', href: '#' },
      { name: 'Insights', href: '#' },
    ],
    support: [
      { name: 'Pricing', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'API Status', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    legal: [
      { name: 'Claim', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
    ],
    social: [
      // {
      //   name: 'Facebook',
      //   href: '#',
      //   icon: (props) => (
      //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      //       <path
      //         fillRule="evenodd"
      //         d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      //         clipRule="evenodd"
      //       />
      //     </svg>
      //   ),
      // },
      // {
      //   name: 'Instagram',
      //   href: '#',
      //   icon: (props) => (
      //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      //       <path
      //         fillRule="evenodd"
      //         d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
      //         clipRule="evenodd"
      //       />
      //     </svg>
      //   ),
      // },
      {
        name: 'Twitter',
        href: 'https://twitter.com/home',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/company/bescored-institute/about/',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M22.225 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.77 24h20.455C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.208 0 22.225 0zM7.412 20.834H3.56V9H7.412v11.834zM5.486 7.967c-1.273 0-2.302-1.02-2.302-2.28 0-1.265 1.029-2.28 2.302-2.28s2.302 1.02 2.302 2.28c0 1.265-1.029 2.28-2.302 2.28zm15.352 12.867h-3.852V14.16c0-1.594-.568-2.682-1.989-2.682-1.082 0-1.727.726-2.01 1.424-.104.253-.13.607-.13.96v7.972h-3.852V9h3.852v1.606c.513-.789 1.432-1.918 3.477-1.918 2.541 0 4.454 1.662 4.454 5.236v6.91z"/>
      </svg>
      
        ),
      },
 
      // {
      //   name: 'YouTube',
      //   href: '#',
      //   icon: (props) => (
      //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      //       <path
      //         fillRule="evenodd"
      //         d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
      //         clipRule="evenodd"
      //       />
      //     </svg>
      //   ),
      // },
    ],
  }

  
  

  return (
    
   <>

    {/* <Carousel>
                  <div>
                      <img src="/images/medical-bg.jpg" alt="image1"/>
                      <p className="legend">Image 1</p>
  
                  </div>
                  <div>
                      <img src="/images/medical-bg2.jpg" alt="image2" />
                      <p className="legend">Image 2</p>
  
                  </div>
                  <div>
                      <img src="/images/medical-bg.jpg" alt="image3"/>
                      <p className="legend">Image 3</p>
  
                  </div>
                  <div>
                      <img src="/images/medical-bg2.jpg" alt="image4"/>
                      <p className="legend">Image 4</p>
  
                  </div>
                  <div>
                      <img src="/images/medical-bg.jpg" alt="image5"/>
                      <p className="legend">Image 5</p>
  
                  </div>
        </Carousel> */}



<footer className="bg-gray-900 mt-40 rounded-t-xl" aria-labelledby="footer-heading">
   
      <div className="mx-auto max-w-7xl px-6 pb-6 pt-20 sm:pt-24 lg:px-8 lg:pt-16">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
        <div className='flex h-full w-full items-center justify-between'>
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-light text-white "><Link href="/expertise">Expertise</Link></h3>
          
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-light text-white"><Link href="/team">Equipe</Link></h3>
        
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-light text-white"><Link href="/cases">Etude de cas</Link></h3>
         
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-light text-white"><Link href="/news">News</Link></h3>
         
              </div>
            </div>
          </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <h3 className="font-normal leading-6 text-white">On vous rappelle</h3>
            <p className="mt-2 leading-6 text-gray-300">
             Prenez contact avec nous pour plus informations
            </p>
            <form className="mt-6 sm:flex sm:max-w-md">
            
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#4DB4C4] sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                placeholder="Téléphone"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-[#4DB4C4] px-3 py-2 text-sm font-light text-white shadow-sm hover:bg-[#4DB4C4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4DB4C4] uppercase"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} target="_blank" className="text-gray-500 hover:text-gray-400">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; Bescored 2023
          </p>
        </div>
      </div>
    </footer>
   </>

  )
}
