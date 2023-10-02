import Image from 'next/image'

export default function Method() {
  return (
    
      <>
       
       <div className='text-center'>

          <p className='uppercase oswald text-4xl '>
            <span className='pr-2 font-semibold'>notre</span>
            <span className='font-light'>méthode</span>
          </p>

          <div className='flex justify-center '>
            <p className='font-light pt-4 max-w-[800px] tracking-tight'>
            Les expertises, les programmes de recherche et les recommandations men&eacute;s par
            beScored Institute, allant de la validation de dispositifs jusqu&rsquo;&agrave;
            l&rsquo;utilisation de mat&eacute;riel, s&rsquo;adressent aux entreprises
            d&eacute;sireuses d&rsquo;observer les r&eacute;elles applications dans
            le monde du sport, du bien-&ecirc;tre, de la sant&eacute; et de l&rsquo;entreprise.
            </p>
          </div>

          <div className='flex justify-center pt-10 gap-10'>

            <div>
              <Image src="/images/method/step1.jpg" width={135} height={135} alt='etape' className='pt-[55px] img1Method cursor-pointer'/>
              <p className='font-semibold text-lg pt-5'>Etape 1</p>
              <p className='pt-5 max-w-[135px] font-light'>Amet amet eget scelerisque tellus sit neque faucibus non.</p>
            </div>

            <div>
              <Image src="/images/method/img1.jpg" width={110} height={146} alt='methode'/>
            </div>

            <div>
              <Image src="/images/method/step2.jpg" width={135} height={135} alt='etape' className='pt-[22px] img2Method cursor-pointer'/>
              <p className='font-semibold text-lg pt-5'>Etape 2</p>
              <p className='pt-5 max-w-[135px] font-light'>Amet amet eget scelerisque tellus sit neque faucibus non.</p>
            </div>

            <div>
              <Image src="/images/method/arrow.jpg" width={110} height={146} alt='methode'/>
            </div>

            <div>
              <Image src="/images/method/step3.jpg" width={135} height={135} alt='etape' className='pt-[40px] img3Method cursor-pointer'/>
              <p className='font-semibold text-lg pt-5'>Etape 3</p>
              <p className='pt-5 max-w-[135px] font-light'>Amet amet eget scelerisque tellus sit neque faucibus non.</p>
            </div>


            <div>
              <Image src="/images/method/img2.jpg" width={110} height={146} alt='methode'/>
            </div>

            <div>
              <Image src="/images/method/step4.jpg" width={135} height={135} alt='etape' className='pt-[16px] img4Method cursor-pointer'/>
              <p className='font-semibold text-lg pt-5'>Etape 4</p>
              <p className='pt-5 max-w-[135px] font-light'>Amet amet eget scelerisque tellus sit neque faucibus non.</p>
            </div>



          </div>

          <div className='flex justify-center pt-10'>
            <button className='btn btn-blue oswald'>call to action</button>
          </div>

       </div>

      </>
   
  )
}
