import Image from 'next/image'
import ContactTop from './contactTop'
import Content from './content'

export default function Home() {
  return (
    <main>

    <div className='-mt-[120px] z-1'>

      <ContactTop/>
      
    </div>
   
   <Content/>
 
   </main>
  )
}
