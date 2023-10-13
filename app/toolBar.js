import Image from 'next/image'
import Link from 'next/link'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function ToolBar() {
  return (
    
      <div className='h-14 bg-black flex  items-center justify-center md:justify-end'>
       
        <div className='text-slate-400 px-8 text-xs'>

          <div className='flex items-center justify-end gap-2'>
            <span className=''><PhoneIcon className="h-3 w-3 text-gray-400" /></span>
            <span><a href="0686584696" className='hover:text-white'>Téléphone: +33 (0)6 86 58 46 93 </a></span>
            <span>|</span>
            <span className=''><EnvelopeIcon className="h-3 w-3 text-gray-400" /></span>
            <span><a href="mailto:contact@bescored.fr" className='hover:text-white'>contact@bescored.fr</a></span>
          </div>

          

        </div>

      </div>
   
  )
}
