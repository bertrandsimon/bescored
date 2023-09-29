import Image from 'next/image'
// import TeamTop from './team'
import TeamTop from './teamTop'
import Content from './content'
import Subteam from './subteam'

export default function Home() {
  return (
    <main>

    <div className='-mt-[120px] z-1'>
      <TeamTop/>
    </div>
   
    <Content/>
    <Subteam/>
    
   </main>
  )
}
