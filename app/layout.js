import "./globals.css";
import { Inter, Work_Sans, Oswald, Poppins } from "next/font/google";
import ToolBar from "./toolBar";
import Nav from "./nav";
import NavMobile from "./navMobile";
import Footer from "./footer";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

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

export const metadata = {
  title: "BeScored : centre d'expertise scientifique",
  description: `Fort de plus de 30 ans d'expérience dans l'optimisation de la performance sportive de haut niveau, beScored propose également cette expertise dans les domaines de la santé, du bien-être et de l'entreprise.`,
};

export default function RootLayout({ children }) {
  const GA_TAG_ID = "G-2SL6Y5LNG1";
  const isProductionEnv =
    process.env.NODE_ENV && process.env.NODE_ENV !== "production";

  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${work_sans.variable} ${oswald.variable} container mx-auto z-10 max-w-screen-2xl`}
      >
        <Head>
          {/* Google Analytics -- Only Include in Production*/}
          {isProductionEnv ? (
            <>
              {/* Global Site Tag (gtag.js) - Google Analytics */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TAG_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TAG_ID}', {
                  page_path: window.location.pathname,
                });
              `,
                }}
              />
            </>
          ) : null}
        </Head>

        <div className="z-20 sticky top-0">
          <ToolBar />
          <div className="visible sm:hidden">
            <NavMobile />
          </div>
          <Nav className="z-12" />
        </div>

        <div className="z-0 relative">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
