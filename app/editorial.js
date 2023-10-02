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
              <span className='font-extralight'>Notre rôle est d’évaluer notamment les différents niveaux de fatigue à 360°, que cela soit mis en œuvre pour les chirurgiens ou les personnels soignants. C’est l’occasion de prendre soin de ceux ou celles qui prennent soin de nous!</span>
            </div>
          </div>
        </div>

        <div className='sm:cols-span-6'>
          <div className='flex justify-center items-center'>
            <div className='p-6 flex-shrink-0'><Image src="/images/editorial2.jpg" alt="editorial" width={145} height={108}/></div>
            <div>
              <p className='font-bold text-lg blue pb-3'>Expertise Sport</p>
              <span className='font-extralight'>Nous travaillons régulièrement sur l’optimisation de la phase de récupération en sport, dans le but de prévenir l’apparition de blessures. Évaluer le sportif et faciliter sa récupération par des dispositifs ou des protocoles appropriés est au centre de nos réflexions au quotidien.</span>
            </div>
          </div>
        </div>

        <div className='sm:cols-span-6'>
          <div className='flex justify-center items-center'>
            <div className='p-6 flex-shrink-0'><Image src="/images/editorial3.jpg" alt="editorial" width={145} height={108}/></div>
            <div>
              <p className='font-bold text-lg blue pb-3'>Expertise Médicale</p>
              <span className='font-extralight'>Des thématiques fortes s’imposent à nous depuis quelques temps, à l’image de la qualité de sommeil à améliorer, de l’augmentation de la vitalité en réduisant le stress, ou le renforcement de nos défenses immunitaires par des procédés appropriés. Notre équipe s’attache à mettre en évidence les sources d’amélioration dans chaque registre, une priorité évidente depuis la crise sanitaire.</span>
            </div>
          </div>
        </div>

        <div className='sm:cols-span-6'>
          <div className='flex justify-center items-center'>
            <div className='p-6 flex-shrink-0'><Image src="/images/editorial4.jpg" alt="editorial" width={145} height={108}/></div>
            <div>
              <p className='font-bold text-lg blue pb-3'>Expertise Corporate</p>
              <span className='font-extralight'>Le monde de l’entreprise est quelquefois bien démuni lorsqu’il s’agit de trouver des solutions pour diagnostiquer la santé mentale souvent fragile de leurs salariés. Issues de nos recherches, nos solutions proposent des diagnostiques pas uniquement subjectifs mais essentiellement à partir de données objectives et de tests faciles à mettre en œuvre. </span>
            </div>
          </div>
        </div>

       

      </div>

      </>
   
  )
}
