
import './globals.css'
import { Inter, Work_Sans, Oswald } from 'next/font/google'
import ToolBar from './toolBar'
import Nav from './nav'
import Footer from './footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
 
const work_sans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata = {
  title: 'BeScored',
  description: `Centre d'expertise scientifique`,
}



export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${work_sans.variable} ${oswald.variable} container mx-auto max-w-screen-2xl`}>
        <ToolBar />
        <Nav />
        {children}
        <Footer/>
        </body>
    </html>
  )
}
