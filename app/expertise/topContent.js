import Image from 'next/image'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

export default function TopContent() {

  const features = [
    {
      name: 'Lorem ipsum',
      description:
        'lorem it quis amet rutrum tellus ullamcorper ultricies libero dolor eget.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Lorem ipsum',
      description:
      'lorem it quis amet rutrum tellus ullamcorper ultricies libero dolor eget.',
      icon: LockClosedIcon,
    },
    {
      name: 'Lorem ipsum',
      description:
      'lorem it quis amet rutrum tellus ullamcorper ultricies libero dolor eget.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Lorem ipsum',
      description:
      'lorem it quis amet rutrum tellus ullamcorper ultricies libero dolor eget.',
      icon: FingerPrintIcon,
    },
  ]

  return (

    <div className="pb-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
  
       
      <div className='text-center pt-20'>
          <p className='font-bold text-lg blue'>Amet amet eget sceleris</p>
          <p className='font-bold text-3xl pt-4'>Amet amet eget scelerisque tellus sit aucibus non</p>
          <p className='font-sm font-extralight pt-4'>“Amet amet eget scelerisque tellus sit neque faucibus non eleifend. <br />Integer eu praesent at a. Ornare arcu.</p>
       </div>
       
      
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DB4C4]">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
   
  )
}
