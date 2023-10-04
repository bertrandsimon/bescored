import Image from 'next/image'
import Link from 'next/link'


export default function ToolBar() {
  return (
    
      <div className='h-14 bg-black flex  items-center justify-center md:justify-end'>
       
        <div className='text-slate-400 px-8 text-xs'>

          <span className='pr-8'><a href="0686584696">Téléphone: 06 86 58 46 96 </a></span>
          
          <span><a href="mailto:contact@bescored.fr">contact@bescored.fr</a></span>

        </div>

      </div>
   
  )
}
