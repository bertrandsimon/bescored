import Image from 'next/image'

export default function ToolBar() {
  return (
    
      <div className='h-12 bg-black flex  items-center justify-center md:justify-end'>
       
        <div className='text-slate-400 px-8 text-sm'>
          <span className='pr-8'>Téléphone: 04 82 28 28 25 </span>
          <span>mail@mail.com</span>
        </div>

      </div>
   
  )
}
