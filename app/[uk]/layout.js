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
  title: "BeScored: Scientific Expertise Center",
  description:
    "With over 30 years of experience in optimizing high-level sports performance, beScored also offers expertise in the fields of health, wellness, and business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${work_sans.variable} ${oswald.variable} container mx-auto z-10 max-w-screen-2xl`}
      >
        <div className="z-20 sticky top-0">
          <ToolBar />
          <div className="visible sm:hidden ">
            <NavMobile />
          </div>
          <Nav className="z-12" />
        </div>

        <div className="z-0 relative">{children}</div>

        <Analytics />
      </body>
    </html>
  );
}
