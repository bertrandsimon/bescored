import "./globals.css";
import { Inter, Work_Sans, Oswald, Poppins } from "next/font/google";
import ToolBar from "./toolBar";
import Nav from "./nav";
import NavMobile from "./navMobile";
import Footer from "./footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const work_sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

// const poppins = Poppins({
//   subsets: ['latin'],
//   variable: '--font-poppins',
//   weight: ["400", "500", "600", "700", "800", "900"],
//   display: 'swap',
// })

export const metadata = {
  title: "BeScored : centre d'expertise scientifique",
  description: `Fort de plus de 30 ans d'expérience dans l'optimisation de la performance sportive de haut niveau, beScored propose également cette expertise dans les domaines de la santé, du bien-être et de l'entreprise.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${work_sans.variable} ${oswald.variable} container mx-auto z-10 max-w-screen-2xl`}
      >
        <div className="z-10">
          <ToolBar />
        </div>
        <div className="visible sm:hidden">
          <NavMobile />
        </div>

        <Nav className="z-12" />

        {children}

        <Footer />
      </body>
    </html>
  );
}
