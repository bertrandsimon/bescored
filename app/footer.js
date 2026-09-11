"use client";

import Link from "next/link";

export default function Footer() {
  const navigation = {
    solutions: [
      { name: "Marketing", href: "#" },
      { name: "Analytics", href: "#" },
      { name: "Commerce", href: "#" },
      { name: "Insights", href: "#" },
    ],
    support: [
      { name: "Pricing", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Guides", href: "#" },
      { name: "API Status", href: "#" },
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Jobs", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" },
    ],
    legal: [
      { name: "Claim", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
    ],
    social: [
      {
        name: "Twitter",
        href: "https://twitter.com/hausswirthc",
        icon: (props) => (
          <svg
            fill="currentColor"
            width="20"
            height="20"
            viewBox="0 0 300 300"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
          </svg>
        ),
      },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/company/bescored-institute/about/",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M22.225 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.77 24h20.455C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.208 0 22.225 0zM7.412 20.834H3.56V9H7.412v11.834zM5.486 7.967c-1.273 0-2.302-1.02-2.302-2.28 0-1.265 1.029-2.28 2.302-2.28s2.302 1.02 2.302 2.28c0 1.265-1.029 2.28-2.302 2.28zm15.352 12.867h-3.852V14.16c0-1.594-.568-2.682-1.989-2.682-1.082 0-1.727.726-2.01 1.424-.104.253-.13.607-.13.96v7.972h-3.852V9h3.852v1.606c.513-.789 1.432-1.918 3.477-1.918 2.541 0 4.454 1.662 4.454 5.236v6.91z" />
          </svg>
        ),
      },
    ],
  };

  return (
    <>
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 pb-6 pt-2 sm:pt-24 lg:px-8 lg:pt-16">
          <div>
            <div className="hidden lg:flex h-full w-full items-center justify-center sm:justify-between">
              <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                <div className="flex flex-row gap-8">
                  <div>
                    <h3 className="font-light text-white uppercase">
                      <Link
                        href="/expertise"
                        className="rounded-md transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[30px] hover:rounded-md hover:bg-[#4DB4C4] mt-3"
                      >
                        Recherche
                      </Link>
                    </h3>
                  </div>

                  <div className="mt-10 md:mt-0">
                    <h3 className="font-light text-white uppercase">
                      <Link
                        href="/masak"
                        className="rounded-md transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[30px] hover:rounded-md hover:bg-[#4DB4C4] mt-3"
                      >
                        Masak
                      </Link>
                    </h3>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="font-light text-white uppercase">
                      <Link
                        href="/team"
                        className="rounded-md transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[30px] hover:rounded-md hover:bg-[#4DB4C4] mt-3"
                      >
                        équipe
                      </Link>
                    </h3>
                  </div>
                  <div>
                    <h3 className="font-light text-white uppercase">
                      <Link
                        href="/cases"
                        className="rounded-md transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[30px] hover:rounded-md hover:bg-[#4DB4C4] mt-3"
                      >
                        études
                      </Link>
                    </h3>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="font-light text-white uppercase">
                      <Link
                        href="/news"
                        className="rounded-md transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[30px] hover:rounded-md hover:bg-[#4DB4C4] mt-3"
                      >
                        News
                      </Link>
                    </h3>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="font-light text-white uppercase">
                      <Link
                        href="/chroniques"
                        className="rounded-md transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[30px] hover:rounded-md hover:bg-[#4DB4C4] mt-3"
                      >
                        Chroniques
                      </Link>
                    </h3>
                  </div>

                  <div className="mt-10 md:mt-0">
                    <h3 className="font-light text-white uppercase">
                      <Link
                        href="/contact"
                        className="rounded-md transition duration-300 ease-in-out inline-flex items-center px-2 uppercase h-[30px] hover:rounded-md hover:bg-[#4DB4C4] mt-3"
                      >
                        Contact
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
            <div className="flex space-x-6 justify-center sm:justify-start md:order-2">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="text-gray-500 hover:text-gray-400 flex items-center"
                >
                  <item.icon
                    className="h-6 w-6"
                    aria-hidden="true"
                    style={{ verticalAlign: "middle" }}
                  />
                </a>
              ))}
            </div>
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0 sm:text-left text-center">
              &copy; beScored 2026 |
              <span>
                {" "}
                Les Aqueducs Bât.1 - 535 Route des Lucioles - 06560 Valbonne |
              </span>
              <span className="hover:text-white">
                <Link href="/legal"> Mentions légales</Link>
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
