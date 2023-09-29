import Image from 'next/image'
import NewsTop from './newsTop'
import News from '../news'

export default function Home() {
  return (
    <main>

    <div className='-mt-[120px] z-1'>
      <NewsTop/>


    </div>
    
    <News/>
 
   </main>
  )
}
