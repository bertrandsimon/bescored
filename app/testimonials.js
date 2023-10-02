import Image from 'next/image'

export default function Testimonials() {
  return (
    
      <>
       
      <section className="py-24 sm:py-32 bg-[url('/images/testimonials-bg.jpg')] bg-cover bg-center rounded-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-1">

          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 ">
            <Image className="h-12 self-start" src="/images/tuple-logo-gray-900.svg" alt="" height={56}
                  width={56}/>
            <figure className="mt-10 flex flex-auto flex-col justify-between ">
              <blockquote className="text-lg leading-8 text-gray-900 ">
                <p>

                En tant que V.P. m&eacute;dical et scientifique du groupe LPG, j&apos;ai eu l&apos;opportunit&eacute; de faire appel &agrave; cette soci&eacute;t&eacute; sur 2 projets de recherche au cours des derni&egrave;res ann&eacute;es. La qualit&eacute; du travail r&eacute;alis&eacute; par leur &eacute;quipe de scientifiques est tout simplement remarquable.
                <br /><br />
                J&apos;ai eu la chance de travailler en &eacute;troite collaboration avec leur &eacute;quipe de recherche et je tiens &agrave; souligner la rigueur et la pr&eacute;cision qui caract&eacute;risent les m&eacute;thodes de recherche employ&eacute;es par le laboratoire. Leurs protocoles sont soigneusement &eacute;labor&eacute;s, et chaque &eacute;tape de l&apos;exp&eacute;rience est minutieusement planifi&eacute;e pour garantir des r&eacute;sultats fiables.
                <br /><br />
                Bescored Institute dispose d&apos;une infrastructure de pointe qui facilite la r&eacute;alisation de projets de recherche ambitieux.
                <br /><br />
                Rigueur scientifique, ponctualit&eacute; dans la livraison des r&eacute;sultats. Les d&eacute;lais ont toujours &eacute;t&eacute; respect&eacute;s, et les rapports finaux &eacute;taient complets, bien r&eacute;dig&eacute;s et facilement compr&eacute;hensibles &raquo;
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <Image
                  className="rounded-full bg-gray-50"
                  src="/images/man.jpg"
                  alt=""
                  height={56}
                  width={56}
                />
                <div className="text-base">
                  <div className="font-semibold text-gray-900">Christian Gagnière</div>
                  <div className="mt-1 text-gray-500">VP Médical LPG</div>
                </div>
              </figcaption>
            </figure>
          </div>
          
          {/* <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20 lg:pr-8 xl:pr-20">
          <Image className="h-12 self-start" src="/images/tuple-logo-gray-900.svg" alt="" height={56}
                  width={56}/>
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam
                  reprehenderit nisi officia voluptate incididunt exercitation exercitation elit. Nostrud veniam sint
                  dolor nisi ullamco.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
              <Image
                  className="rounded-full bg-gray-50"
                  src="/images/man.jpg"
                  alt=""
                  height={56}
                  width={56}
                />
                <div className="text-base">
                  <div className="font-semibold text-gray-900">Joseph Rodriguez</div>
                  <div className="mt-1 text-gray-500">CEO of Reform</div>
                </div>
              </figcaption>
            </figure>
          </div> */}

          {/* <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
          <Image className="h-12 self-start" src="/images/tuple-logo-gray-900.svg" alt="" height={56}
                  width={56}/>
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam
                  reprehenderit nisi officia voluptate incididunt exercitation exercitation elit. Nostrud veniam sint
                  dolor nisi ullamco.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
              <Image
                  className="rounded-full bg-gray-50"
                  src="/images/man.jpg"
                  alt=""
                  height={56}
                  width={56}
                />
                <div className="text-base">
                  <div className="font-semibold text-gray-900">Joseph Rodriguez</div>
                  <div className="mt-1 text-gray-500">CEO of Reform</div>
                </div>
              </figcaption>
            </figure>
          </div> */}


          

        </div>
      </div>
    </section>
      
      </>
   
  )
}




// import Image from 'next/image'

// export default function Testimonials() {
//   return (
    
//       <>
       
//       <section className="py-24 sm:py-32 bg-[url('/images/testimonials-bg.jpg')] bg-cover bg-center rounded-xl">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
//         <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-3">

//           <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
//             <Image className="h-12 self-start" src="/images/tuple-logo-gray-900.svg" alt="" height={56}
//                   width={56}/>
//             <figure className="mt-10 flex flex-auto flex-col justify-between">
//               <blockquote className="text-lg leading-8 text-gray-900">
//                 <p>
//                   “Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare
//                   arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam
//                   ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”
//                 </p>
//               </blockquote>
//               <figcaption className="mt-10 flex items-center gap-x-6">
//                 <Image
//                   className="rounded-full bg-gray-50"
//                   src="/images/man.jpg"
//                   alt=""
//                   height={56}
//                   width={56}
//                 />
//                 <div className="text-base">
//                   <div className="font-semibold text-gray-900">Judith Black</div>
//                   <div className="mt-1 text-gray-500">CEO of Tuple</div>
//                 </div>
//               </figcaption>
//             </figure>
//           </div>
          
//           <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20 lg:pr-8 xl:pr-20">
//           <Image className="h-12 self-start" src="/images/tuple-logo-gray-900.svg" alt="" height={56}
//                   width={56}/>
//             <figure className="mt-10 flex flex-auto flex-col justify-between">
//               <blockquote className="text-lg leading-8 text-gray-900">
//                 <p>
//                   “Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam
//                   reprehenderit nisi officia voluptate incididunt exercitation exercitation elit. Nostrud veniam sint
//                   dolor nisi ullamco.”
//                 </p>
//               </blockquote>
//               <figcaption className="mt-10 flex items-center gap-x-6">
//               <Image
//                   className="rounded-full bg-gray-50"
//                   src="/images/man.jpg"
//                   alt=""
//                   height={56}
//                   width={56}
//                 />
//                 <div className="text-base">
//                   <div className="font-semibold text-gray-900">Joseph Rodriguez</div>
//                   <div className="mt-1 text-gray-500">CEO of Reform</div>
//                 </div>
//               </figcaption>
//             </figure>
//           </div>

//           <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
//           <Image className="h-12 self-start" src="/images/tuple-logo-gray-900.svg" alt="" height={56}
//                   width={56}/>
//             <figure className="mt-10 flex flex-auto flex-col justify-between">
//               <blockquote className="text-lg leading-8 text-gray-900">
//                 <p>
//                   “Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam
//                   reprehenderit nisi officia voluptate incididunt exercitation exercitation elit. Nostrud veniam sint
//                   dolor nisi ullamco.”
//                 </p>
//               </blockquote>
//               <figcaption className="mt-10 flex items-center gap-x-6">
//               <Image
//                   className="rounded-full bg-gray-50"
//                   src="/images/man.jpg"
//                   alt=""
//                   height={56}
//                   width={56}
//                 />
//                 <div className="text-base">
//                   <div className="font-semibold text-gray-900">Joseph Rodriguez</div>
//                   <div className="mt-1 text-gray-500">CEO of Reform</div>
//                 </div>
//               </figcaption>
//             </figure>
//           </div>


          

//         </div>
//       </div>
//     </section>
      
//       </>
   
//   )
// }
